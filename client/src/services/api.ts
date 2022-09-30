import axios, { AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';
import { getToken } from './token';

const BACKEND_URL = 'http://localhost:5000/api/v1';
const REQUEST_TIMEOUT = 5000;

const api = axios.create({
  baseURL: BACKEND_URL,
  timeout: REQUEST_TIMEOUT,
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = getToken();

  if (token && config.headers) {
    config.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => toast.error(error.response.data.message)
);

export default api;
