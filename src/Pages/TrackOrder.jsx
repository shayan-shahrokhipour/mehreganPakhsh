import React, { useContext, useRef, useState } from "react";
import styles from "../Pages/productDetails.module.css";
import { ProductContext } from "../context/ContextProvider";
export const TrackOrder = () => {
  const { saveOrders } = useContext(ProductContext);
  console.log(saveOrders);
  const orderValue = saveOrders.find((item) => item.orderCode === "e497f");
   console.log(orderValue);

   const orderPositionText=[
  "در حال بررسی",
    "در حال بسته بندی",
  "در حال ارسال",
    "سفارش آماده تحویل است"
   ]
   
//-----------------------------------------//
//-------state for orderPosition----------//
//---------------------------------------//
const [orderposition,setOrderposition]=useState(3)
 console.log(orderposition);
    console.log(orderPositionText[orderposition-1]);

  const isActive = (stage) => orderposition >= stage; 

  return (
    <section className={styles.mainContainer}>
      <h3>پیگیری پرداخت</h3>
      <p>در این صفحه شما میتوانید از وضعیت سفارش خودتون مطلع بشید</p>
      <div className={styles.orderTrackHolder}>
        <div className={styles.firstLine}></div>
        <h4>جزئیات سفارش</h4>
        <div className={styles.secondLine}></div>
      </div>
      <div className={styles.orderFields}>
        <h4>کد پیگیری</h4>
        <h4>تاریخ سفارش</h4>
        <h4>تاریخ تحویل</h4>
        <h4>تعداد سفارش</h4>
        <h4>موقعیت</h4>
      </div>
      <div className={styles.orderDetails}>
        <p>{orderValue.orderCode}</p>
        <p>{orderValue.orderDate}</p>
        <p>{orderValue.deliveryDate}</p>
        <p>{orderValue.accepted.length.toLocaleString("fa-IR")}</p>
        <p>{orderPositionText[orderposition-1]}</p>
      </div>
      <div className={styles.orderTracking}>
        <h4>نوار وضعیت</h4>
        <div className={styles.orderTrackingHolder}>
          <div className={styles.styleInwidth}>
            <div
            className={`${styles.circles} ${
             isActive(1) && styles.circleActive
            }`}
          >
            <span>1</span>
          </div>
           <div className={`${styles.orderTrackingLine} ${isActive(2) && styles.orderTrackingLineActive}`}></div>
           <div
            className={`${styles.circles} ${
              isActive(2) &&  styles.circleActive
            
            }`}
          >
            <span>2</span>
          </div>
           <div className={`${styles.orderTrackingLine} ${isActive(3) && styles.orderTrackingLineActive} `}></div>
           <div
            className={`${styles.circles} ${
              isActive(3) &&  styles.circleActive
            
            }`}
          >
            <span>3</span>
          </div>
          <div className={`${styles.orderTrackingLine} ${isActive(4) && styles.orderTrackingLineActive} `}></div>
           <div
            className={`${styles.circles} ${
              isActive(4) &&  styles.circleActive
            
            }`}
          >
            <span>4</span>
          </div>
          </div>
           <div className={styles.TextPositionHolder}>
            {orderPositionText.map(item => 
              <p>{item}</p>
             
             
          ) }
             
           </div>
        </div>

      </div>
    </section>
  );
};
