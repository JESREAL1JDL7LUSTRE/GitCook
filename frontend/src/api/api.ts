import axios from "axios"
import { ACCESS_TOKEN } from "./constant"

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Don't log 401s for the profile endpoint (it's expected for guests)
    if (error.response?.status === 401 && error.config?.url === '/api/profile/') {
      return Promise.reject(error);
    }
    console.error(`Response error [${error.response?.status}]:`, error.response?.data);
    return Promise.reject(error);
  }
);

export default api

// 🔹 Function to Fetch Cart Items
export const getCart = async () => {
    try {
        const res = await api.get('/api/cart/'); // Changed `post` to `get`
        return res.data;
    } catch (error) {
        console.error("Something went wrong:", error);
        throw error; // Fixed error throwing
    }
};