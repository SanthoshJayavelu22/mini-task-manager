import { api } from './api';

const APP_NAME = import.meta.env.VITE_APP_NAME || 'Mini Task Manager';

const register = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);

    if (response.data.token) {
      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('token', response.data.token);
    }

    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || 
                        error.response?.data?.errors?.[0]?.msg || 
                        'Registration failed. Please try again.';
    throw new Error(errorMessage);
  }
};

const login = async (userData) => {
  try {
    const response = await api.post('/auth/login', userData);

    if (response.data.token) {
      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('token', response.data.token);
    }

    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || 
                        'Login failed. Please check your credentials.';
    throw new Error(errorMessage);
  }
};

// Enhanced logout function
const logout = () => {
  // Clear all storage
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  sessionStorage.clear();
  
  // Clear any service worker caches if used
  if ('caches' in window) {
    caches.keys().then(names => {
      names.forEach(name => {
        caches.delete(name);
      });
    });
  }
};

const authService = {
  register,
  login,
  logout,
  APP_NAME,
};

export default authService;