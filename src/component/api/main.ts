import axios from "axios";
import { dataType } from "../../modules/Form";

const api = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    if (
      !config.url?.includes("/users/register") &&
      !config.url?.includes("/users/login")
    ) {
      const token = localStorage.getItem("user:token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.clear();
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

export const registerUser = async (data: dataType) => {
  return api.post("/users/register", data);
};

export const loginUser = async (data: dataType) => {
  return api.post("/users/login", {
    email: data.email,
    password: data.password,
  });
};

export const fetchStockData = async (companyName: string) => {
  return api.get(`/stocks/${companyName}`);
};

export const addMoney = async (amount: number) => {
  return api.post(`/users/addWallet`, {
    amount,
  });
};

export const completePayment = async (paymentId: string) => {
  return api.post(`/users/completePayment`, {
    paymentId,
  });
};

export const portfolioInfo = async () => {
  return api.get(`https://portfolio.free.beeceptor.com`);
};

export default api;
