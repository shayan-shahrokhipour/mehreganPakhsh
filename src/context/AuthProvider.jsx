import axios from "axios";
import React, { createContext, useContext, useEffect, useRef } from "react";
import { BuyContext } from "./CartContext";

export const AutContext = createContext();

const AuthProvider = ({ children }) => {
  const { setErrors } = useContext(BuyContext);

  const accessToken = useRef(null)

  const requestOTP = async (mobile) => {
      const response = await axios.post(
        "https://api.mehreganpakhshpart.ir/api/accounts/auth/request-otp/",
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
       const response = await axios.post("https://api.mehreganpakhshpart.ir/api/accounts/auth/verify-otp/",{phone_number:mobile,
       code:code 
    })
   
     console.log(response);
    accessToken.current = response.data.access
     console.log(accessToken);
     
    
     
  }

  return <AutContext value={{ requestOTP,verifyOTP,accessToken }}>{children}</AutContext>;
};

export default AuthProvider;
