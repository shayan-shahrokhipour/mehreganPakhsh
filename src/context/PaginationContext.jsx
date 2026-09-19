import React, { useContext, useState } from 'react'
import { createContext } from "react";
import  { ProductContext } from './ContextProvider';


export const PaginationProvider = createContext()

const PaginationContext = ({children}) => {
 const {products,filterInfo}=useContext(ProductContext)

 //state
 const [currentpage , setCurrentpage]=useState(0)
  const separategroups=20
       const chunkedArray = Array.from(
  { length: Math.ceil(filterInfo.length / separategroups) }, 
  (v, index) => filterInfo.slice(index * separategroups, (index + 1) * separategroups)
  
);

  return (
     <PaginationProvider value={{chunkedArray,currentpage,setCurrentpage}}>
         {children}
     </PaginationProvider>
  )
}

export default PaginationContext