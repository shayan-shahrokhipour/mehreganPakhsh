import axios from "axios";

const api = axios.create({ baseURL: "https://api.mehreganpakhshpart.ir" });
const cartApi = axios.create({baseURL:"https://api.mehreganpakhshpart.ir"});
const slug = axios.create({ baseURL: "https://api.mehreganpakhshpart.ir" })

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
let refreshPromise = null;

api.interceptors.response.use(
  (response) => {
    return response;
  },

  async (error) => {
    const refreshToken = sessionStorage.getItem("refreshToken");

    if (
      error.response?.status === 401 &&
      !error.config?._retry
    ) {
      if (!refreshToken) {
        sessionStorage.removeItem("accessToken");
                  sessionStorage.removeItem("refreshToken");

        sessionStorage.removeItem("orderId");

         if (window.location.pathname !== "/") {
     window.location.href = "/";
  }
        return Promise.reject(error);
      }

      error.config._retry = true;

      try {
        if (!refreshPromise) {
          refreshPromise = axios.post(
            "https://api.mehreganpakhshpart.ir/api/accounts/auth/refresh/",
            {
              refresh: refreshToken,
            }
          ).finally(() => {
            refreshPromise = null;
          });
        }

        const response = await refreshPromise;

        sessionStorage.setItem(
          "accessToken",
          response.data.access
        );

        if (response.data.refresh) {
          sessionStorage.setItem(
            "refreshToken",
            response.data.refresh
          );
        }

        error.config.headers.set(
          "Authorization",
          `Bearer ${response.data.access}`
        );

        return api(error.config);

      } catch (refreshError) {
        if (
          refreshError.response?.status === 401 ||
          refreshError.response?.status === 400
        ) {
          sessionStorage.removeItem("accessToken");
          sessionStorage.removeItem("refreshToken");
           sessionStorage.removeItem("orderId");
           
           if (window.location.pathname !== "/") {
              window.location.href = "/";
          }
        }

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);



export {api,cartApi,slug}