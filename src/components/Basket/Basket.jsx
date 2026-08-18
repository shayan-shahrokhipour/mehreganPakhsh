import React, { useContext, useEffect, useState } from "react";
import { BuyContext } from "../../context/CartContext";
import styles from "../../components/Basket/basket.module.css";
import { useNavigate } from "react-router-dom";

//components
import Information from "../Information";
const Basket = () => {
  //states
  const [BacktoHome,setBackToHome]=useState(5)
  const [Show,setShow]=useState(false)
   const [getInfo,setGetInfo]=useState({
    name:'',
    family:'',
    mobile:'',
    province:'',
    city:'',
    address:'',
    postalCode:''
   })
  //functions
  const collectTheinfo=()=>{
    setShow(true)
     
  }
  //Navigation
  let navigate = useNavigate()
  //context
  const { totalPrice, selectedItems } = useContext(BuyContext);
  //useEffect for navigate
   useEffect(()=>{
    if(selectedItems.length===0){
                const interval = setInterval(()=>setBackToHome(prev=> prev > 0 ? prev -1 : 0),1000)
                const Timer = setTimeout(()=> {navigate('/')},5000)
                return ()=>{
                  clearTimeout(Timer)
                  clearInterval(interval)
                }
    }            
      },[selectedItems.length,navigate])
  return (
    <>
    <section className={styles.BasketHolder}>
      {selectedItems.length===0 ?
      <>
             <p className={styles.backTomain}>در حال باز گشت به صفحه اصلی {BacktoHome}</p>

       <img className={styles.imgForBasket} src={'/ForBasketPage.jfif'}/> 
      </>
      
      : 
          <div className={styles.factorOfbuying}>
       <div className={styles.borderHolder}>
         <div className={styles.sumBorder}></div>
         <p>صورت حساب</p>
        <div className={styles.sumBorder}></div>
       </div>
       <div className={styles.rows}>
        <h4>نام کالا</h4>
        <h4>تعداد کالا</h4>
        <h4>قیمت هر قلم</h4>
        <h4>جمع قیمت هر محصول</h4>
       </div>
        {selectedItems.map((item) => (

            <div key={item.id} className={styles.countAndname}>
               <p className={styles.nameOfProduct}>{item.name}</p>
            <p>  {item.quantity.toLocaleString("fa-IR") } عدد</p>
            <p> {item.price.toLocaleString("fa-IR") } تومان</p>
            <p className={styles.priceOfEachProduct}>{(item.price*item.quantity).toLocaleString("fa-IR")} تومان</p>
            </div>
        ))}
        <p className={styles.total}>مبلغ قابل پرداخت : {totalPrice.toLocaleString("fa-IR")} تومان</p>
         <button onClick={collectTheinfo}>ثبت سفارش و پرداخت</button>
      </div>
      }
     
    </section>
    <section className={styles.InfoCustomer}>
   {Show===true && <Information  getInfo={getInfo} setGetInfo={setGetInfo} />}
    </section>
    </>
  );
};

export default Basket;
