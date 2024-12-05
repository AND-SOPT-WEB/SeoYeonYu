import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers.token = accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
