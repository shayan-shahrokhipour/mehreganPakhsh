import React, { useState } from 'react'
import styles from '../Pages/checktrackerorder.module.css'
const CheckTrackOrder = ({buttonHandler,checkOrder,checkOrderCode,orderValue,errorforordercode}) => {
   
       
  return (
    <section className={styles.checkTrackerContainer}>
       <h3>برای این که از وضعیت سفارش خودت با خبر بشی شناسه پرداخت رو وارد کن </h3>
       <p className={styles.descriptioncheck}>(شناسه پرداخت برای شما از طریق پیام کوتاه ارسال شده )</p>
        <div className={styles.inputHolder}>
          <input type="text" placeholder='شناسه کاربری خودتون رو وارد کنید ' value={checkOrder} onChange={checkOrderCode}/>
        <button onClick={buttonHandler}>
            وضعیت سفارش
        </button>
        </div>
                <p className={styles.error}>{errorforordercode}</p>

    </section>
      
  )
}

export default CheckTrackOrder