import axios from 'axios'
import React, { createContext, useContext, useState } from 'react'
import { AutContext } from './AuthProvider'
import { BuyContext } from './CartContext'
import { useLocation, useNavigate } from 'react-router-dom'

export const OrderContext = createContext()

const OrderProvider = ({children}) => {
const {accessToken}=useContext(AutContext)
const {selectedItems,quantityValue} = useContext(BuyContext)


const items = selectedItems.map(order => ({product_id:order.id,quantity:quantityValue[order.id]}))

 console.log(items);
 


 
 

const postOrder = async (name,family,province,city,address,mobile,postal)=>{
    const order = {
    items
 ,
  "first_name":name,
  "last_name" : family,
  "province": province,
  "city": city,
  "address": address,
  "postal_code": postal,
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
    await getOrder()  
}

const getOrder = async ()=>{
  const response = await axios.get("https://api.mehreganpakhshpart.ir/api/orders/",
  {headers:{"Authorization": `Bearer ${accessToken.current}`}})

   console.log(response.data);
   

}

  return (
     <OrderContext value={{postOrder}}>
            {children}
     </OrderContext>
  )
}

export default OrderProvider