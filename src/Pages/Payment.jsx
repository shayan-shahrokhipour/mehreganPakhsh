import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "../Pages/productDetails.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BuyContext } from "../context/CartContext";
import { ProductContext } from "../context/ContextProvider";
import { PaymentContext } from "../context/PaymentProvider";
import { OrderContext } from "../context/OrderProvider";

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
 const {frozenOrder}=useContext(OrderContext)
 //useRef
 const loading =useRef(false)
 
  //state
    const [showError,setShowError] = useState("")
    const [showLoading,setShowloading]=useState(false)
  //navigate when empty or transform to payment
  const navigate = useNavigate()
  
   useEffect(()=>{
      if(!frozenOrder){
    navigate('/')
   
}},[])


  
  const successPayment= async ()=>{
    if(loading.current) return
    loading.current=true
    setShowloading(true)
  
    
   try {
     await postPayment()
    
   } catch (error) {
    loading.current=false
    setShowloading(false)
     setShowError(manageError(error))

    setTimeout(() => {
      setShowError("")
    }, 3000);
    
   }
   
    
    
  }
  
  if(!frozenOrder){
    return null
  }
 
 
 

   

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
        {frozenOrder.items.map((item,index) => (
          <div key={index} className={styles.productValue}>
            <p>{item.product_name}</p>
            <p>{item.quantity}</p>
            <p>{item.unit_price.toLocaleString("fa-IR")}</p>
            <p>{item.total_price.toLocaleString("fa-IR")}</p>
          </div>
        ))}
        <p className={styles.total}>مبلغ قابل پرداخت :{frozenOrder.total_amount.toLocaleString("fa-IR")}</p>

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
          <p>{frozenOrder.address.first_name}</p>
          <p>{frozenOrder.address.last_name}</p>
          <p>{frozenOrder.address.postal_code}</p>
          <p>{frozenOrder.address.address}</p>
        </div>
      </div>
      <button onClick={successPayment}  className={styles.goTopayment} disabled={showLoading}>برو به درگاه پرداخت</button>
      <p className={styles.showError}>{showError}</p>
    </section>
  );
};

export default Payment;
