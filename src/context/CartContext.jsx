import React,{createContext, useContext, useEffect, useReducer, useState} from 'react'
import { ProductContext } from './ContextProvider'
   export const BuyContext=createContext()


 const initialArg ={
  selectedItems:[],

 }

const reducer=(state,action)=>{
   
    
  if(action.type==="AddItem"){
    
     return {...state,selectedItems:[...state.selectedItems,{...action.payload,quantity:1}]};
   }if(action.type==="Increase"){
       const IncreaseQuantityOfItems=[...state.selectedItems]
       IncreaseQuantityOfItems[action.payload]={
        ...IncreaseQuantityOfItems[action.payload], quantity: IncreaseQuantityOfItems[action.payload].quantity + 1
       };
       
       
       return {
         ...state,
      selectedItems: IncreaseQuantityOfItems
       }
    }
}
const CartContext = ({children,drawerHandeler}) => {
  const getInformation= useContext(ProductContext)
 const {products}=getInformation
    
    const [state,dispatch]=useReducer(reducer,initialArg)
  
   
  const showInfo =(Info)=>{
    const product = products.find(item => item.id === Info)
    
    dispatch({type:"AddItem",payload:product})
          drawerHandeler() 
  }

  const increaseThequantity=(id)=>{
    const productIndex=state.selectedItems.findIndex(item=> item.id === id)
    dispatch({type:"Increase",payload:productIndex})
    
  }

  
  return (
    <BuyContext value={{showInfo,selectedItems:state.selectedItems,increaseThequantity}}>
        {children}
    </BuyContext>
  )
}

export default CartContext