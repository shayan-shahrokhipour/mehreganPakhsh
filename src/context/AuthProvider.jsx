import axios from 'axios'
import React, { createContext, useContext, useEffect } from 'react'
import { BuyContext } from './CartContext'

export const AutContext =createContext()

const AuthProvider = ({children}) => {
 const {setErrors} = useContext(BuyContext)

  
       
             const requestOTP = async () =>{
   try {
     const response = await axios.post("https://api.mehreganpakhshpart.ir/api/accounts/auth/request-otp/", {
        phone_number:"09192700682"

        }
       )
           console.log(response);

     } catch (error) {
        throw error
    }
      
} 
 
   
  return (
    <AutContext value={{requestOTP}}>
         {children}
    </AutContext>
  )
}

export default AuthProvider