import React, { useContext } from 'react'
import styles from '../footer/footer.module.css'
import { Link, useParams } from 'react-router-dom'
import { ProductContext } from '../../context/ContextProvider'
const Footer = () => {
  const getProducts=useContext(ProductContext)
  const {products}=getProducts
  
  
  return (
    <footer className={styles.footerHolder}>
      <div className={styles.aboutMehreganPakhsh}>
        <h4>معرفی کوتاه</h4>
           <p>مهرگان پخش با سابقه ای 40 ساله از فروش قطعات گلف , پاسات , ایودی شروع به کار کرد و امروز با فروش لوازم یدکی و پخش لوازم پژو و پراید داره رو به جلو ادامه میده و در تمام این سال ها هدفش این بوده که کالای با کیفیت به تمام مردم ایران ارائه بده </p>
           <div className={styles.mehreganpakhshDes}>
            <div className={styles.imgHolder}>
              <img src='/mehreganPakhsh.png' alt="" />
                            <h4>چرا مهرگان پخش</h4>

            </div>
              <p>مهرگان پخش در تامین شلنگ هیدرولیک با کیفیت  و به صرفه فعالیت میکنه و با ارسال سریع میتونه کمک کننده باشه !</p>
            </div> 
      </div>
         <div className={styles.categoryHolder}>
          <h4>محصولات</h4>
           <div className={styles.categorySides}>
            <div className={styles.categoryFirstRow}>
            {products.slice(0,12).map(item=> <Link key={item.id} to={`/productDetails/${item.id}`}>{item.name.slice(0,25)}</Link>)}
           </div>
           <div className={styles.categorySecondRow}>
            {products.slice(12,22).map(item=> <Link key={item.id} to={`/productDetails/${item.id}`}>{item.name.slice(0,25)}</Link>)}
           </div>
           </div>
         </div>
         <div className={styles.callTous}>
          <h4>تماس با ما</h4>
          <ul className={styles.callHolder}>
             <li><a className={styles.footerLinks} href="tel:+989192700682">شماره تماس :09192700682</a></li>
             <li><a className={styles.emailLink} href="mailto:shayanshr1373@gmail.com">ایمیل:shayanshr1373@gmail.com</a></li>
             <li><p>تهران , خیابان آزادی , خیابان حبیب الهی,بلوار تیموری شرقی ,پلاک 42</p></li>
          </ul> 
         </div>
    </footer>
  )
}

export default Footer