import React, { useContext, useEffect, useState } from "react";
import styles from "../Pages/productDetails.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { BuyContext } from "../context/CartContext";

const Payment = () => {
 const {dispatch} = useContext(BuyContext)
  //state
    const [success,setSuccess]=useState(false)

  //navigate when empty or transform to payment
  const navigate = useNavigate()
  const frozenOrder = useLocation().state;
  
   useEffect(()=>{
      if(!frozenOrder){
    navigate('/')
   
}}),[]
  
  const successPayment=()=>{
    setSuccess(true)
    dispatch({type:"clearCard"})
    setTimeout(()=>{
      navigate('/')
    },3000)
   
    
    
  }
  
  if(!frozenOrder){
    return null
  }
 
  const Customer = frozenOrder.customer
  const { name, family, address, postalCode } = Customer;

 

   

  return (
    <section className={styles.paymentHolder}>
      <div className={styles.payment}>
        <div className={styles.borderHolder}>
          <div className={styles.sumBorder}></div>
          <p>سفارشات شما</p>
          <div className={styles.sumBorder}></div>
        </div>
        <div className={styles.productDetails}>
          <p>نام کالا</p>
          <p>تعداد</p>
          <p>قیمت</p>
          <p>جمع مبلغ</p>
        </div>
        {frozenOrder.accepted.map((item) => (
          <div key={item.id} className={styles.productValue}>
            <p>{item.name}</p>
            <p>{item.quantity}</p>
            <p>{item.price.toLocaleString("fa-IR")}</p>
            <p>{(item.quantity * item.price).toLocaleString("fa-IR")}</p>
          </div>
        ))}
        <p className={styles.total}>مبلغ قابل پرداخت :{frozenOrder.totalPrice.toLocaleString("fa-IR")}</p>

        <div className={styles.borderHolder}>
          <div className={styles.sumBorder}></div>
          <p>مشخصات شما</p>
          <div className={styles.sumBorder}></div>
        </div>
        <div className={styles.informationDetails}>
          <p> نام</p>
          <p>نام خانوادگی</p>
          <p>کد پستی</p>
          <p>آدرس</p>
        </div>
        <div className={styles.informationValue}>
          <p>{name}</p>
          <p>{family}</p>
          <p>{postalCode}</p>
          <p>{address}</p>
        </div>
      </div>
      <button onClick={successPayment}  className={styles.goTopayment}>برو به درگاه پرداخت</button>
      {success &&<div className={styles.success}><p>پرداخت با موفقیت انجام شد</p></div>}
    </section>
  );
};

export default Payment;
