import pool from '../config/db.js';

/**
 * Find a user by their email address.
 * @param {string} email
 * @returns {object|null} User row or null
 */
export const findByEmail = async (email) => {
  const { rows } = await pool.query(
    'SELECT * FROM users WHERE email = $1',
    [email]
  );
  return rows[0] || null;
};

/**
 * Find a user by their ID.
 * @param {number} id
 * @returns {object|null} User row (without password) or null
 */
export const findById = async (id) => {
  const { rows } = await pool.query(
    'SELECT id, name, email, created_at FROM users WHERE id = $1',
    [id]
  );
  return rows[0] || null;
};

/**
 * Create a new user.
 * @param {string} name
 * @param {string} email
 * @param {string} hashedPassword
 * @returns {object} The newly created user row (without password)
 */
export const createUser = async (name, email, hashedPassword) => {
  const { rows } = await pool.query(
    'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email, created_at',
    [name, email, hashedPassword]
  );
  return rows[0];
};
