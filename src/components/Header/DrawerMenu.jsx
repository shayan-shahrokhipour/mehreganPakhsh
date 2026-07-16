import React, { useState } from 'react'
import styles from "../Header/header.module.css";
import { IoClose } from "react-icons/io5";
const drawerMenu = ({closeWindow,drawerHandeler}) => {
   
  return (
   <div className={`${styles.drawerMenu} ${closeWindow===true ? styles.drawerMenuActive : null}`}>
       <IoClose onClick={drawerHandeler} className={styles.closeIcon}/>
      
    </div>
  )
}

export default drawerMenu