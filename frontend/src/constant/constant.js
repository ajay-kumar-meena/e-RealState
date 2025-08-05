import axios from 'axios';


const token = localStorage.getItem('token');
console.log("token : ", token)

// Define base variables
const FRONTEND = 'http://localhost:4000';
const API_VERSION = '/api/v1';

export const axiosInstance = axios.create({
  baseURL: `${FRONTEND}${API_VERSION}`,
  withCredentials: true,
  headers: token ? { Authorization: `Bearer ${token}` } : {},
});
