import axios from "axios";

const api = axios.create({ baseURL: "https://api.mehreganpakhshpart.ir" });
const cartApi = axios.create({baseURL:"https://api.mehreganpakhshpart.ir"});
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

//refreshToken
api.interceptors.response.use((response) =>{
   return response
  
  
},

async (error) =>{
   const refreshToken = sessionStorage.getItem("refreshToken")
  
   if(error.response?.status === 401 &&  !error.config._retry && refreshToken){
      error.config._retry = true;

    const response = await axios.post('https://api.mehreganpakhshpart.ir/api/accounts/auth/refresh/',{
      "refresh" : refreshToken
    })
       sessionStorage.setItem("accessToken", response.data.access);
        if(response.data.refresh){
          sessionStorage.setItem("refreshToken" , response.data.refresh)
        }
  
    error.config.headers.set(
    "Authorization",
    `Bearer ${response.data.access}`
  );

  return api(error.config);
   }
            return Promise.reject(error);

 

}

)



export {api,cartApi}