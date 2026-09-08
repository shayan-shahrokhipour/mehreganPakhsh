import React from 'react'
import styles from '../Pages/productDetails.module.css'
import { FaEnvelope, FaMobileAlt } from 'react-icons/fa'
const Calltous = () => {
  return (
    <section className={styles.calltoUs}>
       <div className={styles.imgHolder}>
        <img src="/ABOUTUS/aboutus.jpg" alt="calltous" />
        <div className={styles.backgroundImg}></div>
       </div>
       <div className={styles.phoneNumberandAddress}>
         <div className={styles.infoHolder}>
          <div className={styles.numberHolder}>
                      <FaMobileAlt className={styles.contactIcon}/><a href='tel:09190873814'><span className={styles.callnumber}>شماره تماس :</span>09190873814</a>

          </div>
          <div className={styles.emailHolder}>
                    <FaEnvelope className={styles.contactIcon}/> 
                    <span className={styles.email}>ایمیل :</span>
                     <a href="mailto:shayanshr1373@gmail.com">shayanshr1373@gmail.com</a>

          </div>
          <div className={styles.addressHolder}>
                      <p><span className={styles.address}>آدرس:</span> تهران، خیابان آزادی، خیابان حبیب‌الهی، بلوار تیموری شرقی، پلاک ۴۲</p>
                      
          </div>
         </div>
       </div>
       <div className={styles.enterthecostumerInfo}>
         <div className={styles.inputHolder}>
          <input type="text" placeholder='نام '/>
         <input type="text" placeholder='نام خانوادگی' />
         <input type="number" placeholder='شماره تماس'/>
        <textarea className={styles.costumerText} name="" placeholder='پیام شما' id=""/>
        <button>ارسال پیام</button>
         </div>
       </div>
       <div className={styles.addressMap}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103676.64884156405!2d51.212263143359394!3d35.7041946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e01001524ba8f%3A0x5cefdc3e6322f206!2z2YTZiNin2LLZhSDbjNiv2qnbjCDYp9uM2LHYp9mGINiu2YjYr9ix2Ygg2Ygg2LPYp9uM2b7YpyDZhdmH2LHar9in2YYg2b7Yrti0!5e0!3m2!1sen!2sus!4v1788867368067!5m2!1sen!2sus"
         width="600"
          height="450" 
          style={{ border: 0 }}
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="strict-origin-when-cross-origin"></iframe>
       </div>
    </section>
  )
}

export default Calltous