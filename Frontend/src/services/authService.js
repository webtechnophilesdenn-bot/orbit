import axios from 'axios';

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/auth`,
});

// Attach token to every request if it exists in localStorage
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

/**
 * Register a new user.
 */
export const signupUser = async (name, email, password) => {
  const { data } = await API.post('/signup', { name, email, password });
  return data;
};

/**
 * Log in an existing user.
 */
export const loginUser = async (email, password) => {
  const { data } = await API.post('/login', { email, password });
  return data;
};

/**
 * Get the currently authenticated user's details.
 */
export const getMe = async () => {
  const { data } = await API.get('/me');
  return data;
};
