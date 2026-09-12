import React from 'react'
import styles from '../Pages/productDetails.module.css'
import { useLocation } from 'react-router-dom'
export const TrackOrder = () => {
    const orders = useLocation().state
    console.log(orders);
    
  return (
    <section className={styles.mainContainer}>
        <h3>پیگیری پرداخت</h3>
        <p>در این صفحه شما میتوانید از وضعیت سفارش خودتون مطلع بشید</p>
        <div className={styles.orderTrackHolder}>
            <div className={styles.firstLine}></div>
            <h4>جزئیات سفارش</h4>
             <div className={styles.secondLine}></div>
        </div>
    </section>
  )
}
