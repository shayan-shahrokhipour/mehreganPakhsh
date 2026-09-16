import React, { useEffect, useState } from 'react'
import styles from '../Pages/productDetails.module.css'
import { FaChevronDown, FaChevronUp, FaEnvelope, FaMobileAlt } from 'react-icons/fa'
import {useValidate} from '../context/ContextProvider'
const Calltous = () => {
  // const [errors , setErrors] = useState("")
const [getInfo , setGetinfo]=useState({
  name:"",
  family:"",
  mobile:"",
  Message:""
})

const {family,mobile,Message}=getInfo

const [message,setMessage]=useState(() => {
  const savedMessages = localStorage.getItem("messages")
    return savedMessages ? JSON.parse(savedMessages) : []


})
useEffect(()=>{
  localStorage.setItem("messages",JSON.stringify(message))
             
},[message])


   const {errors,isvalidate,setErrors} =useValidate()

  useEffect(()=>{
     setErrors(isvalidate(getInfo))
  },[getInfo])

  
 

  const inputHandler=(event)=>{
    const na = event.target.name
    const val = event.target.value
    setGetinfo(getInfo=>({...getInfo,[na]:val}))
   
    

  }
 
  

  const saveInfo=()=>{
   
    if(errors){
      return
    }
         setMessage(item=>[...item,getInfo])
    

     
      
      
   

      setGetinfo({name:"",
  family:"",
  mobile:"",
  Message:""})
    
  }
  //---------------controll the accordion------------------//
 const [accordion,setAccordion]=useState({
  firstAcc:false,
   secondAcc:false,
  thirdAcc:false,
  fourthAcc:false
 })
 

 
 
  const openaccordion=(event)=>{
     const getId = event.currentTarget.id
    setAccordion(item => ({...item,[getId] : !item[getId]}))  
    
  }



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
          <input type="text" name='name' value={getInfo.name} placeholder='نام ' onChange={inputHandler}/>
         <input type="text" name='family' value={getInfo.family}  placeholder='نام خانوادگی' onChange={inputHandler}/>
         <input type="number" name='mobile' value={getInfo.mobile}  placeholder='شماره تماس'onChange={inputHandler}/>
        <textarea className={styles.costumerText} name="Message" value={getInfo.Message} placeholder='پیام شما' id="" onChange={inputHandler}/>
         <button className={styles.sendInfo} disabled={!getInfo.name || !family || !mobile || !Message } onClick={saveInfo}>ارسال پیام</button>
          <p className={styles.errorType}>{errors}</p>
         </div>
       </div>
       <div className={styles.questionsandanswers}>
        <h3>سوالات متداول</h3>
          <div className={styles.accordionHolder}>
            <div onClick={openaccordion} id='firstAcc' className={`${styles.accordion} ${accordion.firstAcc  ? styles.accordionActive : null}`}>
              <div className={styles.accordionstyle}>
                <p>چگونه سفارش ثبت کنم ؟ </p>
                {accordion.firstAcc ? <FaChevronUp className={styles.arrowdownicon}/> : <FaChevronDown  className={styles.arrowdownicon}/>}
             
              </div>
               {accordion.firstAcc && <p className={styles.answer}>ابتدا در صفحه اول زوی دکمه افزودن به سبد خرید کلیک کنید (از صفحه جزئیات هم قادر به انجام این کار هستید) از منوی کشویی سمت راست میتوانید به کم یا زیادکردن تعداد اقلام یا حذف اقلام اقدام کنید در مرحله بعد روی ایکن سبد خرید در سمت چپ منو کلیک کنید و روی دکمه ثبت اطلاعات کلیک کنید در این مرحله اطلاعات خودرا وارد کنید و دکمه ثبت اطلاعات رو کلیک کنید در مرحله بعد با کلیک روی دکمه به درگاه پرداخت متصل میشوید .</p>}
        
            </div>
            <div onClick={openaccordion} id='secondAcc' className={`${styles.accordion} ${accordion.secondAcc ? styles.accordionActive : null}`}>
              <div className={styles.accordionstyle}>
                <p>چگونه سفارش خودم رو پیگیری کنم ؟ </p>
                             {accordion.secondAcc ? <FaChevronUp className={styles.arrowdownicon}/> : <FaChevronDown  className={styles.arrowdownicon}/>}
              </div>
               {accordion.secondAcc && <p className={styles.answer}>
                 شما میتوانید با شناسه پیگیری که بعد از پرداخت برای شما به صورت پیام ارسال میشه به قسمت پیگیری سفارش رفته و با وارد کردن شناسه پیگیری خود از وضعیت سفارش خودتون آگاه باشید همچین با شماره 09190873814 هم میتوانید تماس بگیرید .
                </p>}
        
            </div>
            <div onClick={openaccordion} id='thirdAcc' className={`${styles.accordion} ${accordion.thirdAcc  ? styles.accordionActive : null}`}>
             <div className={styles.accordionstyle}>
               <p>اگر پرداخت نا موفق بود چه کنم ؟ </p>
 {accordion.thirdAcc ? <FaChevronUp className={styles.arrowdownicon}/> : <FaChevronDown  className={styles.arrowdownicon}/>}         
     </div>
             {accordion.thirdAcc && <p className={styles.answer}>
                  اگر پرداخت نا موقق بود کافیست در ساعات آتی دوباره امتحان کنید 
              </p>}
            </div>
            <div onClick={openaccordion} id='fourthAcc' className={`${styles.accordion} ${accordion.fourthAcc  ? styles.accordionActive : null}`}>
             <div className={styles.accordionstyle}>
               <p>شرایط تعویض یا مرجوعی چیست ؟</p>
                           {accordion.fourthAcc ? <FaChevronUp className={styles.arrowdownicon}/> : <FaChevronDown  className={styles.arrowdownicon}/>}          
             </div>
               {accordion.fourthAcc && <p className={styles.answer}>
                اگر برای مجموعه محرز شود که اقلام مرجوعی متعلق به مجموعه مهرگان پخش باشد و مشکل فنی از بدو خرید با اقلام بوده مرجوعی اقلام رو قبول میکند 
              </p>}
            </div>

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