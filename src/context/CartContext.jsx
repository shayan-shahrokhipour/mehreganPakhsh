import React,{createContext, useContext, useEffect, useReducer, useState} from 'react'
import { ProductContext } from './ContextProvider'
   export const BuyContext=createContext()


 const initialArg ={
  selectedItems:[]
 }

const reducer=(state,action)=>{
   if(action.type==="AddItem"){
    console.log(state);
    
       return {...state,selectedItems:[...state.selectedItems,action.payload]};
       
    
   }
}
const CartContext = ({children,drawerHandeler}) => {
  const getInformation= useContext(ProductContext)
 const {products}=getInformation
  
//  const[selectedItems,setSelectedItems]=useState([])
  
    const [state,dispatch]=useReducer(reducer,initialArg)
  
   
  const showInfo =(Info)=>{
    console.log(Info);
    const product = products.find(item => item.id === Info)
    dispatch({type:"AddItem",payload:product})
          drawerHandeler() 
  }

  
  
  return (
    <BuyContext value={{showInfo,selectedItems:state.selectedItems}}>
        {children}
    </BuyContext>
  )
}

export default CartContext