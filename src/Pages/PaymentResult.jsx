import React, { useContext, useEffect } from 'react'
import {  useSearchParams } from 'react-router-dom'
import { OrderContext } from '../context/OrderProvider'
import axios from 'axios'
import { AutContext } from '../context/AuthProvider'

const PaymentResult = () => {
    const {accessToken}=useContext(AutContext)
    // const {orderId} = useContext(OrderContext)
    const [searchParams] = useSearchParams()
    const status =searchParams.get('status')
    const orderNumber =searchParams.get('order_number')
    const trackingCode =searchParams.get('tracking_code')
    const orderId=searchParams.get('order_id')
    console.log(trackingCode,orderNumber,status,orderId);

    useEffect(()=>{
         const getShipment = async () =>{
           const response = await axios.get(`https://api.mehreganpakhshpart.ir/api/shipments/${orderId}/`,{headers:{"Authorization":`Bearer ${accessToken.current}`}})
    
try {
             console.log(response);

} catch (error) {
   console.log(error.response);
   
}    
    
           
        }
        getShipment()
    },[orderId])
  return (
    <div>PaymentResult</div>
  )
}

export default PaymentResult