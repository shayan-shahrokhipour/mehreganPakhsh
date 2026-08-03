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
   //states
        const [Model,setModel]=useState("همه")
        const [filterInfo,setFilterInfo]=useState([])
  return (
    <ProductContext value={{products,setProducts,Model,setModel,filterInfo,setFilterInfo}}>
        {children}
   </ProductContext>
  )
}

export default ContextProvider