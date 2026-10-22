import React, { useContext, useState } from 'react'
import styles from "../Pages/authentication.module.css"
import { BuyContext } from '../context/CartContext'
import { AutContext } from '../context/AuthProvider'
import {  useNavigate , useLocation } from 'react-router-dom'
export const Authentication = () => {
  //-----------state-----------//
   const [code,setCode] = useState("")
  
   
  //-----------Context-------------//
    const {verifyOTP} = useContext(AutContext)
    const {errors,setErrors} = useContext(BuyContext)
    //-----------useNavigation-------------//
    const navigate = useNavigate()
    const order = useLocation().state

    const orderHandler = async () =>{
     try {
       console.log(order.customer.mobile);
       await verifyOTP(order.customer.mobile,code)
       navigate("/payment",{state:order})
     } catch (error) {
      setErrors(error.response.data.code)
      setTimeout(()=>{
        setErrors("")
      },3000)
       console.log(error.response.data.code);
     }
     
    }
    
    const inputHandler =(e)=>{
      setCode(e.target.value)
        console.log(code);
    }

  return (
    <section className={styles.imgHolder}>
      <section className={styles.authenticationHolder}>
        <h3>لطفا رمز یک بار مصرف را وارد کنید</h3>
        <p>(رمز یک بار مصرف برای شما از طریق پیام ارسال میشود)</p>
        <div className={styles.inputHolder}>
        <input type="text" placeholder='کد خود را وارد کنید' onChange={inputHandler} value={code}/>
        <button onClick={orderHandler}>تایید کد</button>
        </div>
      </section>
      <p className={styles.errorParagraph}>{errors}</p>
    </section>
  )
}
