import React, { createContext, useContext, useRef } from 'react'
import { OrderContext } from './OrderProvider'
import axios from 'axios'
import { AutContext } from './AuthProvider'

import {api} from '../services/api'

export const PaymentContext = createContext()

const PaymentProvider = ({children}) => {
    const {orderId} = useContext(OrderContext)
    


    const postPayment = async () =>{
      
          const response = await api.post("api/payments/request/",{
            order_id:orderId.current
        })

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