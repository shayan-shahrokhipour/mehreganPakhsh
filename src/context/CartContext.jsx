import React,{createContext} from 'react'


   export const BuyContext=createContext()

const CartContext = ({children}) => {
    const shayan ="test"
  return (
    <BuyContext>
        {children}
    </BuyContext>
  )
}

export default CartContext