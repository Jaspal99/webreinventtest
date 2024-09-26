import axios from 'axios';

const API_URL = 'https://reqres.in/api';  // Base URL for ReqRes API

// Login Service
export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;  // Returns the response data (e.g., token)
  } catch (error: any) {
    throw new Error(error.response?.data?.error || 'Login failed');
  }
};

// Register Service
export const register = async (email: string, password: string) => {
  try {
    const response = await axios.post(`https://reqres.in/api/register`, { email, password });
    return response.data;  // Returns the response data (e.g., token)
  } catch (error: any) {
    throw new Error(error.response?.data?.error || 'Registration failed');
  }
};

// Fetch Users Service
export const fetchUsers = async (page: number = 1) => {
  try {
    const response = await axios.get(`https://reqres.in/api/users/logged-in`);
    return response.data;  // Returns the paginated users data
  } catch (error: any) {
    throw new Error('Failed to fetch users');
  }
};
