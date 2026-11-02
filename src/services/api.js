import axios from "axios";

 

const api = axios.create({ baseURL: "https://api.mehreganpakhshpart.ir" });

api.interceptors.request.use((config) => {
  const accessToken = sessionStorage.getItem("accessToken");
  if (accessToken) {
    config.headers.set("Authorization", `Bearer ${accessToken}`);
  }
  return config;
});

export {api}