import React, { useContext, useEffect } from 'react'
import {  useSearchParams } from 'react-router-dom'
import { OrderContext } from '../context/OrderProvider'
import axios from 'axios'
import { AutContext } from '../context/AuthProvider'

const PaymentResult = () => {
    const {accessToken}=useContext(AutContext)
    const {orderId} = useContext(OrderContext)
    const [searchParams] = useSearchParams()
    const status =searchParams.get('status')
    const orderNumber =searchParams.get('order_number')
    const trackingCode =searchParams.get('tracking_code')
    console.log(trackingCode,orderNumber,status);

    useEffect(()=>{
         const getShipment = async () =>{
           const response = await axios.get(`https://api.mehreganpakhshpart.ir/api/shipments/${orderId.current}/`,{headers:{"Authorization":`Bearer ${accessToken.current}`}})
    
           console.log(response);
    
    
           
        }
        getShipment()
    },[status,orderNumber,trackingCode])
  return (
    <div>PaymentResult</div>
  )
}

export default PaymentResult