import React, { useContext, useState } from 'react'
import styles from "../Pages/authentication.module.css"
import { BuyContext } from '../context/CartContext'
import { AutContext } from '../context/AuthProvider'
import {  useNavigate , useLocation } from 'react-router-dom'
import { OrderContext } from '../context/OrderProvider'



const getOrderErrorMessage = (error) => {
  const data = error.response?.data

  if (!data) {
    return "ارتباط با سرور برقرار نشد. دوباره تلاش کنید."
  }

  if (data.detail) {
    return data.detail
  }

 

  for (const  messages of Object.values(data)) {
   
      return messages
    
  }

  return "ثبت سفارش ناموفق بود. دوباره تلاش کنید."
}

export const Authentication = () => {
  //-----------state-----------//
   const [code,setCode] = useState("")
   const [getErrors,setGetErrors]=useState("")
   
  //-----------Context-------------//
    const {verifyOTP,requestOTP} = useContext(AutContext)
    // const {errors,setErrors} = useContext(BuyContext)
    const {postOrder} = useContext(OrderContext)
    
    //-----------useNavigation-------------//
    const navigate = useNavigate()
    const order = useLocation().state

    const orderHandler = async () =>{
     try {
       console.log(order.customer.mobile);
       await verifyOTP(order.customer.mobile,code)
        
     
     
     } catch (error) {
      setGetErrors(error.response?.data?.code || "تایید کد ناموفق بود")
      console.log(error.response);
      
      setTimeout(()=>{
        setGetErrors("")
      },3000)
      return
     }
      try {
     
       const {name,family,province,city,address,mobile,postalCode} = order.customer
       console.log(order);
       
       await postOrder(name,family,province,city,address,mobile,postalCode)
              navigate("/payment",{state:order})

      } catch (error) {
            setGetErrors(getOrderErrorMessage(error))
              setTimeout(() => {
    setGetErrors("")
  }, 3000)
      }

    }

    const errorRequestInotp = async () =>{
      try {
       await requestOTP(order.customer.mobile)
      } catch (error) {
        setGetErrors(error.response.data.phone_number)
        setTimeout(() => {
           setGetErrors("")
        }, 3000);
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
       <button className={styles.newRequest} onClick={errorRequestInotp}>درخواست مجدد کد یکبار مصرف</button>
      <p className={styles.errorParagraph}>{getErrors}</p>
    </section>
  )
}
