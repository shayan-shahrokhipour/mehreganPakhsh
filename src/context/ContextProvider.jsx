import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
//context
export const ProductContext = createContext()
//Product Context
const ContextProvider = ({children}) => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
       const productdata=async()=>{
         const response = await axios.get("/products/products.json")
         setProducts(response.data)
       
                 
       }
       productdata()
    },[])
   
  return (
    <ProductContext value={products}>
        {children}
   </ProductContext>
  )
}

export default ContextProvider