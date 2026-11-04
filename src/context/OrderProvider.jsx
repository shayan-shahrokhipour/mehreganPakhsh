import axios from 'axios'
import React, { createContext, useContext, useRef, useState } from 'react'
import { AutContext } from './AuthProvider'
import { BuyContext } from './CartContext'
import { useLocation, useNavigate } from 'react-router-dom'
import { PaymentContext } from './PaymentProvider'

import {api} from '../services/api'

export const OrderContext = createContext()


const OrderProvider = ({children}) => {
// const {accessToken}=useContext(AutContext)
const {selectedItems} = useContext(BuyContext)

const orderId = useRef(null)

const items = selectedItems.map(order => ({product_id:order.id,quantity:order.quantity}))

 console.log(items);
 


 
 

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
    console.log(order);

 
   const response = await api.post("https://api.mehreganpakhshpart.ir/api/orders/",
    order)
  
    console.log(response.data)
    
    console.log(response.headers); 
     orderId.current = response.data.order_id
    console.log(orderId.current);
    
  
}

const getOrder = async ()=>{
  const response = await axios.get("api/orders/",
  {headers:{"Authorization": `Bearer ${accessToken.current}`}})

   
    
}



  return (
     <OrderContext value={{postOrder,orderId}}>
            {children}
     </OrderContext>
  )
}

export default OrderProvider