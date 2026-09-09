import React, { useEffect, useState } from 'react'
import styles from '../Pages/productDetails.module.css'
import { FaEnvelope, FaMobileAlt } from 'react-icons/fa'
const Calltous = () => {
  const [errors , setErrors] = useState("")
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
             console.log(message);
             
},[message])
  
  const inputHandler=(event)=>{
    const na = event.target.name
    const val = event.target.value
    setGetinfo(getInfo=>({...getInfo,[na]:val}))
                     console.log(errors);
    if((na==="name" || na==="family")&&/[A-Za-z]/.test(val)) {
          setErrors("از حروف بزرگ و کوچک انگلیسی استفاده نشود")
          return;
       }
       if(na==="name" && val.length<3 && val.length>0){
        setErrors("اسم کاربر کمتر از سه حرف نباشد ")
        return
       }
       if(na==="mobile" && !/^09\d{9}$/.test(val)){
        setErrors("شماره همراه نباید کمتر از یازده رقم باشد ")
        return
       }
       if((na==="name" || na==="family" || na==="mobile") && val.length===0){
        setErrors("لطفا نام و نام خانوادگی و تلفن همراه خود را بنویسید")
        return
       }if(na==="postalCode" && !/^\d{10}$/.test(val)){
        setErrors("کد پستی باید ده رقم باشد ")
        return
       }
       setErrors("")
    

  }

  const saveInfo=()=>{
    setMessage(item=>[...item,getInfo])
     
      
   

      setGetinfo({name:"",
  family:"",
  mobile:"",
  Message:""})
    
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
         <button className={styles.sendInfo} disabled={!getInfo.name || !family || !mobile || !Message} onClick={saveInfo}>ارسال پیام</button>
          <p className={styles.errorType}>{errors}</p>
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