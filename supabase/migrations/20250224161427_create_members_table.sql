CREATE TABLE members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  avatar_url TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  location TEXT NOT NULL
);