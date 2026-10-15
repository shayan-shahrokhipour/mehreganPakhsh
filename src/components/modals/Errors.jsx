import React, { useContext, useEffect, useState } from 'react'
import styles from "../modals/modals.module.css"
import { BuyContext } from '../../context/CartContext'
const Errors = () => {
    const {errors,setErrors}=useContext(BuyContext)
    const [showerror,setShowerror] = useState(false)
   
    useEffect(() => {
    if (!errors) return;
     setShowerror(true)
    const timer = setTimeout(() => {
      setErrors("");
      setShowerror(false)
    }, 3000);

    return () => clearTimeout(timer);
  }, [errors, setErrors]);

   
  return (
    
    showerror && <div className={styles.errorHolder}><p>{errors}</p></div>

  )
}

export default Errors