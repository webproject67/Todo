import axios, { AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';
import { getToken, saveToken } from './token';

const api = axios.create({
  withCredentials: true,
  baseURL: `${process.env.REACT_APP_URL_SERVER}/api/v1`,
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
  async (error) => {
    if (error.response.status === 401) {
      const { data } = await api.get<string>('users/checkAuth');
      saveToken(data);
      error.config.isRetry = true;

      return api.request(error.config);
    }

    return toast.error(error.response.data.message);
  }
);

export default api;
