import { Hono } from "hono";
import {
  getOAuthRedirectUrl,
  exchangeCodeForSessionToken,
  authMiddleware,
  deleteSession,
  MOCHA_SESSION_TOKEN_COOKIE_NAME,
} from "@getmocha/users-service/backend";
import { getCookie, setCookie } from "hono/cookie";
import "./types";

const app = new Hono<{ Bindings: Env }>();

// Helper function to check if user is admin
function isAdmin(userEmail: string, env: Env): boolean {
  const adminEmails = env.ADMIN_EMAILS?.split(',').map(email => email.trim().toLowerCase()) || [];
  return adminEmails.includes(userEmail.toLowerCase());
}

// ===== AUTH ENDPOINTS =====

app.get("/api/oauth/google/redirect_url", async (c) => {
  const redirectUrl = await getOAuthRedirectUrl("google", {
    apiUrl: c.env.MOCHA_USERS_SERVICE_API_URL,
    apiKey: c.env.MOCHA_USERS_SERVICE_API_KEY,
  });

  return c.json({ redirectUrl }, 200);
});

app.post("/api/sessions", async (c) => {
  const body = await c.req.json();

  if (!body.code) {
    return c.json({ error: "No authorization code provided" }, 400);
  }

  const sessionToken = await exchangeCodeForSessionToken(body.code, {
    apiUrl: c.env.MOCHA_USERS_SERVICE_API_URL,
    apiKey: c.env.MOCHA_USERS_SERVICE_API_KEY,
  });

  setCookie(c, MOCHA_SESSION_TOKEN_COOKIE_NAME, sessionToken, {
    httpOnly: true,
    path: "/",
    sameSite: "none",
    secure: true,
    maxAge: 60 * 24 * 60 * 60, // 60 days
  });

  return c.json({ success: true }, 200);
});

app.get("/api/users/me", authMiddleware, async (c) => {
  const user = c.get("user");
  if (!user) {
    return c.json({ error: "Unauthorized" }, 401);
  }
  
  return c.json({
    ...user,
    isAdmin: isAdmin(user.email, c.env),
  });
});

app.get("/api/logout", async (c) => {
  const sessionToken = getCookie(c, MOCHA_SESSION_TOKEN_COOKIE_NAME);

  if (typeof sessionToken === "string") {
    await deleteSession(sessionToken, {
      apiUrl: c.env.MOCHA_USERS_SERVICE_API_URL,
      apiKey: c.env.MOCHA_USERS_SERVICE_API_KEY,
    });
  }

  setCookie(c, MOCHA_SESSION_TOKEN_COOKIE_NAME, "", {
    httpOnly: true,
    path: "/",
    sameSite: "none",
    secure: true,
    maxAge: 0,
  });

  return c.json({ success: true }, 200);
});

// ===== TOKEN ENDPOINTS =====

app.get("/api/tokens/balance", authMiddleware, async (c) => {
  const user = c.get("user");
  if (!user) {
    return c.json({ error: "Unauthorized" }, 401);
  }
  
  // Admins get unlimited tokens
  if (isAdmin(user.email, c.env)) {
    return c.json({ tokenCount: 999999, isAdmin: true });
  }
  
  // Check if we need to refresh daily tokens
  const today = new Date().toISOString().split('T')[0];
  
  let userTokens = await c.env.DB.prepare(
    "SELECT * FROM user_tokens WHERE user_id = ?"
  ).bind(user.id).first();

  if (!userTokens) {
    // Create new user token record with 25 free tokens
    await c.env.DB.prepare(
      "INSERT INTO user_tokens (user_id, token_count, last_refresh_date) VALUES (?, ?, ?)"
    ).bind(user.id, 25, today).run();
    
    return c.json({ tokenCount: 25, isAdmin: false });
  }

  // Check if we need to refresh tokens (new day)
  if (userTokens.last_refresh_date !== today) {
    await c.env.DB.prepare(
      "UPDATE user_tokens SET token_count = 25, last_refresh_date = ?, updated_at = CURRENT_TIMESTAMP WHERE user_id = ?"
    ).bind(today, user.id).run();
    
    return c.json({ tokenCount: 25, isAdmin: false });
  }

  return c.json({ tokenCount: userTokens.token_count as number, isAdmin: false });
});

app.post("/api/tokens/use", authMiddleware, async (c) => {
  const user = c.get("user");
  if (!user) {
    return c.json({ error: "Unauthorized" }, 401);
  }
  
  // Admins don't consume tokens
  if (isAdmin(user.email, c.env)) {
    return c.json({ tokenCount: 999999, isAdmin: true });
  }
  
  const today = new Date().toISOString().split('T')[0];
  
  let userTokens = await c.env.DB.prepare(
    "SELECT * FROM user_tokens WHERE user_id = ?"
  ).bind(user.id).first();

  if (!userTokens) {
    // Create new user with 25 tokens
    await c.env.DB.prepare(
      "INSERT INTO user_tokens (user_id, token_count, last_refresh_date) VALUES (?, ?, ?)"
    ).bind(user.id, 25, today).run();
    userTokens = { token_count: 25, last_refresh_date: today };
  }

  // Check if we need to refresh tokens
  if (userTokens.last_refresh_date !== today) {
    await c.env.DB.prepare(
      "UPDATE user_tokens SET token_count = 25, last_refresh_date = ?, updated_at = CURRENT_TIMESTAMP WHERE user_id = ?"
    ).bind(today, user.id).run();
    userTokens = { token_count: 25, last_refresh_date: today };
  }

  const currentTokenCount = userTokens.token_count as number;
  if (currentTokenCount < 1) {
    return c.json({ error: "Insufficient tokens" }, 403);
  }

  // Deduct 1 token
  await c.env.DB.prepare(
    "UPDATE user_tokens SET token_count = token_count - 1, updated_at = CURRENT_TIMESTAMP WHERE user_id = ?"
  ).bind(user.id).run();

  // Log the transaction
  await c.env.DB.prepare(
    "INSERT INTO token_transactions (user_id, transaction_type, token_amount) VALUES (?, ?, ?)"
  ).bind(user.id, "usage", -1).run();

  const newCount = currentTokenCount - 1;
  return c.json({ tokenCount: newCount, isAdmin: false });
});

// ===== PAYPAL ENDPOINTS =====

async function getPayPalAccessToken(env: Env): Promise<string> {
  // Using btoa for base64 encoding (available in Workers runtime)
  const auth = btoa(`${env.PAYPAL_CLIENT_ID}:${env.PAYPAL_CLIENT_SECRET}`);
  
  const response = await fetch('https://api-m.paypal.com/v1/oauth2/token', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });

  const data = await response.json() as { access_token: string };
  return data.access_token;
}

app.post("/api/paypal/create-order", authMiddleware, async (c) => {
  const user = c.get("user");
  if (!user) {
    return c.json({ error: "Unauthorized" }, 401);
  }
  
  const body = await c.req.json();
  const { tier } = body;

  const tiers: Record<string, { price: string; tokens: number }> = {
    tier1: { price: "5.00", tokens: 75 },
    tier2: { price: "20.00", tokens: 500 },
    tier3: { price: "50.00", tokens: 2000 },
  };

  if (!tiers[tier]) {
    return c.json({ error: "Invalid tier" }, 400);
  }

  const selectedTier = tiers[tier];
  const accessToken = await getPayPalAccessToken(c.env);

  const orderResponse = await fetch('https://api-m.paypal.com/v2/checkout/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: selectedTier.price,
          },
          description: `${selectedTier.tokens} Calculator Tokens`,
          custom_id: JSON.stringify({ userId: user.id, tier, tokens: selectedTier.tokens }),
        },
      ],
    }),
  });

  const orderData = await orderResponse.json() as any;
  return c.json(orderData);
});

app.post("/api/paypal/capture-order", authMiddleware, async (c) => {
  const user = c.get("user");
  if (!user) {
    return c.json({ error: "Unauthorized" }, 401);
  }
  
  const body = await c.req.json();
  const { orderId } = body;

  const accessToken = await getPayPalAccessToken(c.env);

  const captureResponse = await fetch(`https://api-m.paypal.com/v2/checkout/orders/${orderId}/capture`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
  });

  const captureData = await captureResponse.json() as any;

  if (captureData.status === 'COMPLETED') {
    const customData = JSON.parse(captureData.purchase_units[0].payments.captures[0].custom_id);
    const tokensToAdd = customData.tokens;
    const pricePaid = parseFloat(captureData.purchase_units[0].payments.captures[0].amount.value);

    // Add tokens to user account
    await c.env.DB.prepare(
      "UPDATE user_tokens SET token_count = token_count + ?, updated_at = CURRENT_TIMESTAMP WHERE user_id = ?"
    ).bind(tokensToAdd, user.id).run();

    // Log the transaction
    await c.env.DB.prepare(
      "INSERT INTO token_transactions (user_id, transaction_type, token_amount, price_paid, paypal_transaction_id) VALUES (?, ?, ?, ?, ?)"
    ).bind(user.id, "purchase", tokensToAdd, pricePaid, captureData.id).run();

    // Get updated balance
    const userTokens = await c.env.DB.prepare(
      "SELECT token_count FROM user_tokens WHERE user_id = ?"
    ).bind(user.id).first();

    return c.json({ 
      success: true, 
      tokenCount: (userTokens?.token_count as number) || 0,
      tokensAdded: tokensToAdd 
    });
  }

  return c.json({ error: "Payment capture failed" }, 400);
});

export default app;
