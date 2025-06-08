import axios, { AxiosError, type InternalAxiosRequestConfig } from  "axios";
import { error } from "console";
import { authKeys } from "~/constants/auth";


// * create axios instance with custom config 
const api = axios.create({

  baseURL: "http://localhost:1337/api",
  timeout:10000,
  headers: {
    // "my-custom-header": "my-custom-header", Not allowed 
    "Content-Type": "application/json"
    },
    });

    // Request interceptor

    api.interceptors.request.use(
      (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
      // Get jwt token from localstorage
      
      const token = localStorage.getItem(authKeys.TOKEN_KEY);

      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }

      config.headers["Request-Time"] = new Date().toISOString();
      return config;
    },
    (error: AxiosError): Promise<AxiosError> => {
      console.log("Request interceptor error", error);
      return Promise.reject(error);
    }
  )

    export default api;