
CREATE TABLE token_transactions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id TEXT NOT NULL,
  transaction_type TEXT NOT NULL,
  token_amount INTEGER NOT NULL,
  price_paid REAL,
  paypal_transaction_id TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_token_transactions_user_id ON token_transactions(user_id);
CREATE INDEX idx_token_transactions_created_at ON token_transactions(created_at);
