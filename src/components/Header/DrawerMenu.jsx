import React, { useContext, useState } from 'react'
import styles from "../Header/headerstyles/header.module.css";
import { IoClose } from "react-icons/io5";
import { BuyContext } from '../../context/CartContext';
const DrawerMenu = ({state,drawerHandeler,modalHandeler}) => {
  
const {selectedItems} = useContext(BuyContext)
   
 
   
  return (
   <div className={`${styles.drawerMenu} ${state === true ? styles.drawerMenuActive : ""}`}>
       <IoClose onClick={drawerHandeler} className={styles.closeIcon}/>
       {selectedItems.map(item => <div key={item.id}>
         <p>{item.name}</p>
         <p>{item.price}</p>
         
       </div>)}
    </div>
  )
}

export default DrawerMenu