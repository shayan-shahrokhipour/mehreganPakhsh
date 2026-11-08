import axios from "axios";
import React, { createContext, useContext, useEffect, useRef } from "react";
import {api, cartApi} from '../services/api'
import { BuyContext } from "./CartContext";

export const AutContext = createContext();

const AuthProvider = ({ children }) => {
  const { setErrors } = useContext(BuyContext);



  const requestOTP = async (mobile) => {
      const response = await cartApi.post(
       "/api/accounts/auth/request-otp/",
        {
          phone_number: mobile,
        },
        
      );

      
      setErrors(response.data.message)
       setTimeout(() => {
         setErrors("")
       }, 3000);
      
    
  };

  const verifyOTP = async (mobile,code)=>{
       const response = await cartApi.post("/api/accounts/auth/verify-otp/",{phone_number:mobile,
       code:code 
    })
   
    sessionStorage.setItem('accessToken',response.data.access)
    sessionStorage.setItem('refreshToken',response.data.refresh)
     
    
     
  }

  return <AutContext value={{ requestOTP,verifyOTP }}>{children}</AutContext>;
};

export default AuthProvider;
