import React, { useState } from 'react'
import styles from "../Header/headerstyles/header.module.css";
import { IoClose } from "react-icons/io5";
const DrawerMenu = ({state,drawerHandeler,modalHandeler}) => {
  

   
  return (
   <div className={`${styles.drawerMenu} ${state === true ? styles.drawerMenuActive : null}`}>
       <IoClose onClick={drawerHandeler} className={styles.closeIcon}/>
        
    </div>
  )
}

export default DrawerMenu