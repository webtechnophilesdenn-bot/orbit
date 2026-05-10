-- Orbit Database Schema
-- Run this script against your PostgreSQL database to create the required tables.
-- Usage: psql -U your_db_user -d orbit -f src/config/schema.sql

CREATE TABLE IF NOT EXISTS users (
  id          SERIAL PRIMARY KEY,
  name        VARCHAR(255) NOT NULL,
  email       VARCHAR(255) UNIQUE NOT NULL,
  password    VARCHAR(255) NOT NULL,
  created_at  TIMESTAMP DEFAULT NOW()
);
