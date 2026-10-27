import React, { createContext, useContext, useRef } from 'react'
import { OrderContext } from './OrderProvider'
import axios from 'axios'
import { AutContext } from './AuthProvider'

export const PaymentContext = createContext()

const PaymentProvider = ({children}) => {
    const {orderId} = useContext(OrderContext)
    console.log(orderId);
    
    const {accessToken} = useContext(AutContext)


    const postPayment = async () =>{
        console.log(orderId);
        
        const response = await axios.post("https://api.mehreganpakhshpart.ir/api/payments/request/",{
            order_id:orderId.current
        },{
            headers:{"Authorization":`Bearer ${accessToken.current}`
        }})

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