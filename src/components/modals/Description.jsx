import React, { useContext } from 'react'
import styles from '../modals/modals.module.css'
import { ProductContext } from '../../context/ContextProvider'
import { IoClose } from "react-icons/io5";
import { FaCircle } from 'react-icons/fa';

const Description = ({descriptionClose}) => {
  const {descriptions}=useContext(ProductContext)
  
  
  const closeHandler=()=>{
    descriptionClose()
  }

  return (
    descriptions && 
    <div className={styles.descriptionHolder}>
        <div className={styles.welcomeAndicon}>
          <h4>به مهرگان پخش خوش آمدید</h4>
                    <IoClose onClick={closeHandler} className={styles.closeIcon} />
        </div>
         <hr />
         <div className={styles.mainDescription}>
          <p>برای این که شما کاربران عزیز بتوانید به راحتی با این وب سایت کار کنید و چیزی که نیاز دارید را خریداری کنید بهتر است برای تجربه بهتر توضیحات زیر را بخوانید :</p>
         </div>
           <div className={styles.descriptionBorderHolder}>
            <div className={styles.rightBorder}></div>
             <p>توضیحات سایت</p>
             <div className={styles.leftBorder}></div>
           </div>
           <ul className={styles.listOfdescriptions}>
            
             <li> <FaCircle className={styles.dot}/> <span>از قسمت سمت راست سایت (انتخاب خودرو)  میتوانید با انتخاب مدل خودرو سایت را شخصی سازی کنید </span>   </li>
                          
                <li> <FaCircle className={styles.dot}/> <span>زمان انتخاب محصول شما از منوی سایت که از گوشه باز میشود میتوانید به کم و زیاد و حذف محصول اقدام کنید </span>  </li>
                <li> <FaCircle className={styles.dot}/> <span>شما تا قبل از ارسال اطلاعات خود میتوانید از همان منو به کم و زیاد شدن و یا حذف محصول اقدام کنید  </span>  </li>
                <li> <FaCircle className={styles.dot}/> <span>شما میتوانید بعد از خواندن جزئیات محصول را خریداری کنید   </span>  </li>
                <li> <FaCircle className={styles.dot}/> <span>اگر سوالی  پیش اومد میتونید با شماره تماس 09190873814 تماس بگیرید</span>  </li>
           </ul>
    </div>

  )
}

export default Description