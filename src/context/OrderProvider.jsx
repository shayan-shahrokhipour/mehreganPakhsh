import axios from 'axios'
import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { AutContext } from './AuthProvider'
import { BuyContext } from './CartContext'
import { useLocation, useNavigate } from 'react-router-dom'
import { PaymentContext } from './PaymentProvider'

import {api} from '../services/api'

export const OrderContext = createContext()


const OrderProvider = ({children}) => {
  //state
  const [frozenOrder,setFrozenOrder]=useState("")
const {selectedItems} = useContext(BuyContext)

const orderId = useRef(sessionStorage.getItem("orderId"))

const items = selectedItems.map(order => ({product_id:order.id,quantity:order.quantity}))

 


 
 

const postOrder = async (name,family,province,city,address,mobile,postalCode)=>{
    const order = {
    items
 ,
  "first_name":name,
  "last_name" : family,
  "province": province,
  "city": city,
  "address": address,
  "postal_code": postalCode,
  "recipient_phone": mobile,
  "discount_code": ""

 }

 
   const response = await api.post("api/orders/",
    order)
  
    
     orderId.current = response.data.order_id
     sessionStorage.setItem("orderId",orderId.current)
     
   await getOrder()
}

const getOrder = async ()=>{
  try {
    const response = await api.get(`api/orders/${orderId.current}`,
 )
     setFrozenOrder(response.data)
   
  } catch (error) {
      setErrors(
      error.response?.data?.detail ||
      "دریافت اطلاعات سفارش با مشکل مواجه شد."
    );
  }
    
}

useEffect(()=>{
 if(orderId.current){
   getOrder()
 }
},[])

useEffect(()=>{
     console.log(frozenOrder);

},[frozenOrder])

  return (
     <OrderContext value={{postOrder,orderId,frozenOrder}}>
            {children}
     </OrderContext>
  )
}

export default OrderProvider