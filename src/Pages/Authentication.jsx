import React, { useContext } from 'react'
import styles from "../Pages/authentication.module.css"
import { BuyContext } from '../context/CartContext'
import { AutContext } from '../context/AuthProvider'
import {  useNavigate , useLocation } from 'react-router-dom'
export const Authentication = () => {
    const {verifyOTP} = useContext(AutContext)
    
    const navigate = useNavigate()
    const order = useLocation().state

    const orderHandler = async () =>{
      console.log(order);
       await verifyOTP()
       navigate("/payment",{state:order})
     
    }
     
  return (
    <section className={styles.imgHolder}>
      <section className={styles.authenticationHolder}>
        <h3>لطفا رمز یک بار مصرف را وارد کنید</h3>
        <p>(رمز یک بار مصرف برای شما از طریق پیام ارسال میشود)</p>
        <div className={styles.inputHolder}>
        <input type="text" placeholder='کد خود را وارد کنید'/>
        <button onClick={orderHandler}>تایید کد</button>
        </div>
      </section>
    </section>
  )
}
