import axios from "axios";
import { logout } from "./shared/utils/auth";

const apiClient = axios.create({
  baseURL: "http://localhost:4000/api", //connect us on backend
  timeout: 2000, //timeout after 2secs
});

apiClient.interceptors.request.use(
  (config) => {
    //authorization with token from local storage of browser
    const userDetails = localStorage.getItem("user");

    if (userDetails) {
      const token = JSON.parse(userDetails).token; //parse JSON and add token
      config.headers.Authorization = `User ${token}`; //authorization headers with token
    }
    return config;
  },
  (err) => {
    return Promise.reject(err); //return our config
  }
);

export const login = async (data) => {
  try {
    return await apiClient.post("/auth/login", data); //push us to already defined functions on our backend
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const register = async (data) => {
  try {
    return await apiClient.post("/auth/register", data); //push us to already defined functions on our backend
  } catch (exception) {
    //catch any exceptions
    return {
      error: true,
      exception,
    };
  }
};

const checkResponseCode = (exception) => {
  const responseCode = exception?.response?.status;

  if (responseCode) {
    (responseCode === 401 || responseCode === 403) && logout();
  }
};

//401 - if response code is Unauthorized (401) or code Forbidden (403) it calls logout function which does its thing
