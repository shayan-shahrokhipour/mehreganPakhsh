import axios from 'axios'
import React, { createContext, useContext, useRef, useState } from 'react'
import { AutContext } from './AuthProvider'
import { BuyContext } from './CartContext'
import { useLocation, useNavigate } from 'react-router-dom'
import { PaymentContext } from './PaymentProvider'

export const OrderContext = createContext()

const OrderProvider = ({children}) => {
const {accessToken}=useContext(AutContext)
const {selectedItems,quantityValue} = useContext(BuyContext)

const orderId = useRef(null)

const items = selectedItems.map(order => ({product_id:order.id,quantity:quantityValue[order.id]}))

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

 
   const response = await axios.post("https://api.mehreganpakhshpart.ir/api/orders/",
    order
  
,{headers:{
    "Authorization": `Bearer ${accessToken.current}`
  }})
  
    console.log(response.data)
    
    console.log(response.headers); 
     orderId.current = response.data.order_id
    console.log(orderId.current);

    await getOrder()  
  
}

const getOrder = async ()=>{
  const response = await axios.get("https://api.mehreganpakhshpart.ir/api/orders/",
  {headers:{"Authorization": `Bearer ${accessToken.current}`}})

   
    
}

  return (
     <OrderContext value={{postOrder,orderId}}>
            {children}
     </OrderContext>
  )
}

export default OrderProvider