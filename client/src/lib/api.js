import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

/**
 * Send contact inquiry
 */
export const sendContactMessage = async (formData) => {
  const response = await apiClient.post('/api/contact', formData);
  return response.data;
};

/**
 * Check backend API health
 */
export const checkApiHealth = async () => {
  const response = await apiClient.get('/api/contact/health');
  return response.data;
};
