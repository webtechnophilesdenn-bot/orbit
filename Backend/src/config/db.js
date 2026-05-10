import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

// Test the connection immediately on startup
pool.query('SELECT 1')
  .then(() => console.log('📦 Connected to PostgreSQL'))
  .catch((err) => console.error('❌ Database connection error:', err.message));

pool.on('error', (err) => {
  console.error('❌ Unexpected PostgreSQL error:', err);
  process.exit(1);
});

export default pool;
