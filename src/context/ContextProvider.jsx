import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'

 
//context
export const ProductContext = createContext()
//Product Context
const ContextProvider = ({children}) => {
  //states
    const [products,setProducts]=useState([])
        const [Model,setModel]=useState("همه")
        const [filterInfo,setFilterInfo]=useState([])

    useEffect(()=>{
       const productdata=async()=>{
         const response = await axios.get("/products/products.json")
         setProducts(response.data)
       
                 
       }
       productdata()
    },[])
     useEffect(()=>{
      setFilterInfo(products)
    },[products])
  console.log(filterInfo);

 
  return (
    <ProductContext value={{products,setProducts,Model,setModel,filterInfo,setFilterInfo}}>
        {children}
   </ProductContext>
  )
}

export default ContextProvider