import axios from "axios";

const api = axios.create({ baseURL: "https://api.mehreganpakhshpart.ir" });
const cartApi = axios.create({baseURL:"https://api.mehreganpakhshpart.ir"})

//basketApi
cartApi.interceptors.request.use((config)=>{
   const guestToken =  sessionStorage.getItem("guestToken")
     if(guestToken){
        config.headers.set("X-Guest-Cart-Token",guestToken)
     }
      return config
   
})

//accessToken
api.interceptors.request.use((config) => {
  const accessToken = sessionStorage.getItem("accessToken");
  if (accessToken) {
    config.headers.set("Authorization", `Bearer ${accessToken}`);
  }
  return config;
});

export {api,cartApi}