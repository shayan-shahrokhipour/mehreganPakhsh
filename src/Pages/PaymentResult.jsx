import React, { useContext, useEffect, useState } from 'react'
import {  useSearchParams } from 'react-router-dom'
import { OrderContext } from '../context/OrderProvider'
import axios from 'axios'
import { AutContext } from '../context/AuthProvider'

import {api} from '../services/api'

const PaymentResult = () => {
  //useState
  
  const [error,setError]=useState("")
  //Context
    // const {accessToken}=useContext(AutContext)
    //Params
    const [searchParams] = useSearchParams()
    const status =searchParams.get('status')
    const orderNumber =searchParams.get('order_number')
    const trackingCode =searchParams.get('tracking_code')
    const orderId=searchParams.get('order_id')
    console.log(trackingCode,orderNumber,status,orderId);

    useEffect(()=>{
         const getShipment = async () =>{
          
          try {
             const response = await api.get(`/api/shipments/${orderId}/`)
    

             console.log(response);
          } catch (error) {
             
            if(error.response?.data?.code === 'token_not_valid'){
             setError("توکن معتبر نیست")
             
          }else if(error.response?.status === 404){
            setError("شناسه سفارش اشتباه است")
          }else if(error.response?.status=== 401){
              setError("مقدار توکن وجود ندارد")
          }else{
            setError("دریافت اطلاعات ارسال سفارش با مشکل مواجه شد")
          }


        }
           
        }
        getShipment()
    },[orderId])
  return (
    <section>
      <p>{error}</p>
    </section>
  )
}

export default PaymentResult