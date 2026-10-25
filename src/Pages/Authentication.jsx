import React, { useContext, useState } from 'react'
import styles from "../Pages/authentication.module.css"
import { BuyContext } from '../context/CartContext'
import { AutContext } from '../context/AuthProvider'
import {  useNavigate , useLocation } from 'react-router-dom'
import { OrderContext } from '../context/OrderProvider'
export const Authentication = () => {
  //-----------state-----------//
   const [code,setCode] = useState("")
  
   
  //-----------Context-------------//
    const {verifyOTP} = useContext(AutContext)
    const {errors,setErrors} = useContext(BuyContext)
    const {postOrder} = useContext(OrderContext)
    
    //-----------useNavigation-------------//
    const navigate = useNavigate()
    const order = useLocation().state

    const orderHandler = async () =>{
     try {
       console.log(order.customer.mobile);
       await verifyOTP(order.customer.mobile,code)
         const name = order.customer.name
       const family = order.customer.family
       const province = order.customer.province
       const city = order.customer.city
       const address = order.customer.address
       const mobile = order.customer.mobile
       const postal = order.customer.postalCode
       console.log(order);
       
       await postOrder(name,family,province,city,address,mobile,postal)
       navigate("/payment",{state:order})
     
     
     } catch (error) {
      setErrors(error.response?.data?.code || "تایید کد ناموفق بود")
      setTimeout(()=>{
        setErrors("")
      },3000)
      //  console.log(error.response?.data?.code);
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
