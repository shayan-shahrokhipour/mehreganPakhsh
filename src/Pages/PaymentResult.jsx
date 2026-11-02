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
             const response = await api.get(`https://api.mehreganpakhshpart.ir/api/shipments/${orderId}/`,api)
    

             console.log(response);
          } catch (error) {

            if(error.response?.data?.code === 'token_not_valid'){
             setError("توکن در دسترس نیست")
             
          }else if(error.response?.status === 404){
            setError("شناسه سفارش اشتباه است")
          }
          else{
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