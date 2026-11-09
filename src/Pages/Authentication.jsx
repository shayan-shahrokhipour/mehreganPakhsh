import React, { useContext, useRef, useState } from 'react'
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
    if (messages) {
      return messages
    }
  }

  return "ثبت سفارش ناموفق بود. دوباره تلاش کنید."
}

export const Authentication = () => {
 //-----------useRef--------------//
   const disable = useRef(false)


  //-----------state-----------//
   const [code,setCode] = useState("")
   const [disabled,setDisabled]=useState(false)
   const [acceptDisabled,setAcceptDisabled]=useState(false)
  //-----------Context-------------//
    const {verifyOTP,requestOTP} = useContext(AutContext)
    const {errors,setErrors,dispatch} = useContext(BuyContext)
    const {postOrder} = useContext(OrderContext)
    
    //-----------useNavigation-------------//
    const navigate = useNavigate()
    const order = useLocation().state

    const orderHandler = async () =>{
      if(disable.current) return
      disable.current=true
      setAcceptDisabled(true)
     try {
       await verifyOTP(order.customer.mobile,code)
        
     
     
     } catch (error) {
      setErrors(error.response?.data?.code || "تایید کد ناموفق بود")
      
      setTimeout(()=>{
        setErrors("")
      },3000)
      disable.current=false
      setAcceptDisabled(false)
      return
     }
      try {
     
       const {name,family,province,city,address,mobile,postalCode} = order.customer
       
       await postOrder(name,family,province,city,address,mobile,postalCode)
        dispatch({ type: "clearCard" });
        sessionStorage.removeItem("guestToken");
              navigate("/payment",{state:order})

      } catch (error) {
            setErrors(getOrderErrorMessage(error))
              setTimeout(() => {
    setErrors("")
  }, 3000)
                disable.current=false
setAcceptDisabled(false)    
  }

    }

    const errorRequestInotp = async () =>{
       if(disable.current) return
      disable.current=true
      setDisabled(true)
      try {
       await requestOTP(order.customer.mobile)
      } catch (error) {
        setErrors(error.response?.data?.phone_number)
        setTimeout(() => {
           setErrors("")
        }, 3000);
      }finally{
        disable.current=false
        setDisabled(false)
      }
    }
    
    const inputHandler =(e)=>{
      setCode(e.target.value)
    }

  return (
    <section className={styles.imgHolder}>
      <section className={styles.authenticationHolder}>
        <h3>لطفا رمز یک بار مصرف را وارد کنید</h3>
        <p>(رمز یک بار مصرف برای شما از طریق پیام ارسال میشود)</p>
        <div className={styles.inputHolder}>
        <input type="text" placeholder='کد خود را وارد کنید' onChange={inputHandler} value={code}/>
        <button onClick={orderHandler} disabled={acceptDisabled}>تایید کد</button>
        </div>
      </section>
       <button className={styles.newRequest} onClick={errorRequestInotp} disabled={disabled}>درخواست مجدد کد یکبار مصرف</button>
      <p className={styles.errorParagraph}>{errors}</p>
    </section>
  )
}
