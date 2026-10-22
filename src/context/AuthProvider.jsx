import axios from "axios";
import React, { createContext, useContext, useEffect } from "react";
import { BuyContext } from "./CartContext";

export const AutContext = createContext();

const AuthProvider = ({ children }) => {
  const { setErrors } = useContext(BuyContext);

  const requestOTP = async () => {
    try {
      const response = await axios.post(
        "https://api.mehreganpakhshpart.ir/api/accounts/auth/request-otp/",
        {
          phone_number: "09192700682",
        },
      );
      console.log(response);
    } catch (error) {
      throw error;
    }
  };

  const verifyOTP = async ()=>{
    const response = await axios.post("https://api.mehreganpakhshpart.ir/api/accounts/auth/verify-otp/",{phone_number:"09192700682",
       code:"498530" 
    })
   
     console.log(response);
     
  }

  return <AutContext value={{ requestOTP,verifyOTP }}>{children}</AutContext>;
};

export default AuthProvider;
