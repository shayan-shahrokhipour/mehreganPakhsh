import React, { useContext, useEffect, useState } from "react";
import styles from "../Pages/productDetails.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BuyContext } from "../context/CartContext";
import { ProductContext } from "../context/ContextProvider";
import { PaymentContext } from "../context/PaymentProvider";

const manageError =(error)=>{
  const data = error.response?.data
  
  if(!data){
    return "ارتباط با شبکه قطع است , لطفا بعدا امتحان کنید"
    
  } if(data.order_id){
     return data.order_id
  } if(data.detail){
    return data.detail
  }

  return "از ورود به درگاه پرداخت جلو گیری شد"

}

const Payment = () => {
 const {dispatch} = useContext(BuyContext)
 const {saveOrders,setSaveOrders}=useContext(ProductContext)
 const {postPayment} = useContext(PaymentContext)
 
  //state
    const [success,setSuccess]=useState(false)
    
    const [showError,setShowError] = useState("")

  //navigate when empty or transform to payment
  const navigate = useNavigate()
  const frozenOrder = useLocation().state;
  
   useEffect(()=>{
      if(!frozenOrder){
    navigate('/')
   
}},[])

useEffect(()=>{
    console.log(saveOrders);

 localStorage.setItem('keepOrder',JSON.stringify(saveOrders))

},[saveOrders])
  
  const successPayment= async ()=>{
  setSaveOrders(item=>[...item,frozenOrder])
  
    
   try {
     await postPayment()
    // setSuccess(true)
    // dispatch({type:"clearCard"})
    // setTimeout(()=>{
    //   navigate('/')
    // },3000)
   } catch (error) {
     setShowError(manageError(error))
          // (error.response.data.order_id)

    console.log(showError);
    setTimeout(() => {
      setShowError("")
    }, 3000);
    
   }
   
    
    
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
      <p className={styles.showError}>{showError}</p>
    </section>
  );
};

export default Payment;
