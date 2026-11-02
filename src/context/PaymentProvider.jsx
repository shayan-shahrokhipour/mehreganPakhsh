import React, { createContext, useContext, useRef } from 'react'
import { OrderContext } from './OrderProvider'
import axios from 'axios'
import { AutContext } from './AuthProvider'

import {api} from '../services/api'

export const PaymentContext = createContext()

const PaymentProvider = ({children}) => {
    const {orderId} = useContext(OrderContext)
    console.log(orderId);
    
    const {accessToken} = useContext(AutContext)


    const postPayment = async () =>{
        console.log(orderId);
      
          const response = await api.post("https://api.mehreganpakhshpart.ir/api/payments/request/",{
            order_id:orderId.current
        },api)

        console.log(response);
       const payUrl=response.data.pay_url; 
       if(payUrl){
       window.location.href=payUrl
           
       } 
      
       

        
    } 

   

  return (
    <PaymentContext value={{postPayment}}>
           {children}
    </PaymentContext>
  )
}

export default PaymentProvider