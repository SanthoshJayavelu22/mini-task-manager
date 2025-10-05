import { api } from './api';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

// Get all tasks
const getTasks = async () => {
  try {
    const response = await api.get(`${API_BASE_URL}/tasks`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch tasks');
  }
};

// Create task
const createTask = async (taskData) => {
  try {
    const response = await api.post(`${API_BASE_URL}/tasks`, taskData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create task');
  }
};

// Update task
const updateTask = async (taskId, taskData) => {
  try {
    const response = await api.put(`${API_BASE_URL}/tasks/${taskId}`, taskData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to update task');
  }
};

// Delete task
const deleteTask = async (taskId) => {
  try {
    const response = await api.delete(`${API_BASE_URL}/tasks/${taskId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to delete task');
  }
};

const taskService = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};

export default taskService;