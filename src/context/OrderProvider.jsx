import axios from 'axios'
import React, { createContext, useContext, useState } from 'react'
import { AutContext } from './AuthProvider'
import { BuyContext } from './CartContext'

export const OrderContext = createContext()

const OrderProvider = ({children}) => {
const [createOrder,setCreateOrder]=useState({})
const {accessToken}=useContext(AutContext)
const {selectedItems,quantityValue} = useContext(BuyContext)


const items = selectedItems.map(order => ({product_id:order.id,quantity:quantityValue[order.id]}))

 console.log(items);
 
 
const postOrder = async ()=>{
    console.log("post order اجرا شد");
    
  const response = await axios.post("https://api.mehreganpakhshpart.ir/api/orders/",{
  items
 ,
  "recipient_name": "string",
  "province": "string",
  "city": "string",
  "address": "string",
  "postal_code": "3775629429",
  "recipient_phone": "09192700682",
  "discount_code": ""

},{headers:{
    "Authorization": `Bearer ${accessToken.current}`
  }})
  
    console.log(response)
    
}

  return (
     <OrderContext value={{postOrder}}>
            {children}
     </OrderContext>
  )
}

export default OrderProvider