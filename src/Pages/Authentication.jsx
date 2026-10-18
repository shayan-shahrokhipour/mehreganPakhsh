import React from 'react'
import styles from "../Pages/authentication.module.css"
export const Authentication = () => {
  return (
    <section className={styles.imgHolder}>
      <section className={styles.authenticationHolder}>
        <h3>لطفا رمز یک بار مصرف را وارد کنید</h3>
        <p>(رمز یک بار مصرف برای شما از طریق پیام ارسال میشود)</p>
        <div className={styles.inputHolder}>
        <input type="text" placeholder='کد خود را وارد کنید'/>
        <button>اهراز هویت</button>
        </div>
      </section>
    </section>
  )
}
