declare global {
  interface Env {
    DB: D1Database;
    MOCHA_USERS_SERVICE_API_URL: string;
    MOCHA_USERS_SERVICE_API_KEY: string;
    PAYPAL_CLIENT_ID: string;
    PAYPAL_CLIENT_SECRET: string;
  }
}

export {};
