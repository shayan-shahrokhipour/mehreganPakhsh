import React, { useContext, useEffect, useState } from 'react'
import styles from '../components/Basket/basket.module.css'
import { useNavigate } from 'react-router-dom'
import { BuyContext } from '../context/CartContext'
//uuid
import { v4 as uuidv4 } from 'uuid';

const Information = ({getInfo,setGetInfo}) => {
 
   //context
   const {selectedItems,totalPrice} = useContext(BuyContext) 
   
   const [errors,setErrors]=useState("");
   //props
   const {name,family,mobile,province,city,address,postalCode}=getInfo

   //useEffect for validate
   useEffect(()=>{
    setErrors(validateforInformation(getInfo))
   },[getInfo])
   //navigate
   const navigate = useNavigate()

   const getValue=(event)=>{
    const val = event.target.value;
    const name = event.target.name;
    
    setGetInfo(item=> ({...item,[name]:val}))
      
   }

   const validateforInformation=(data)=>{
    
        if((data.name || data.family || data.province || data.city)&&(/[A-Za-z]/.test(data.name)||/[A-Za-z]/.test(data.family) || /[A-Za-z]/.test(data.province) || /[A-Za-z]/.test(data.city))) {
          return"از حروف بزرگ و کوچک انگلیسی استفاده نشود"
          
       }
       if(data.name && data.name.length<3 && data.name.length>0){
        return"اسم کاربر کمتر از سه حرف نباشد "
        
       }
       if(data.mobile && !/^09\d{9}$/.test(data.mobile)){
        return"شماره همراه نباید کمتر از یازده رقم باشد "
        
       }
       if((data.name || data.family || data.mobile) &&  (data.name.length===0 || data.family.length===0 || data.mobile.length===0)){
        return"لطفا نام و نام خانوادگی و تلفن همراه خود را بنویسید"
        
       }if(data.postalCode && !/^\d{10}$/.test(data.postalCode)){
       return"کد پستی باید ده رقم باشد "
        
       }
       return("")
   }

    const addHandler=()=>{
        const error =validateforInformation(getInfo)
        if(error){
          return
        }
     const order={
      customer:getInfo,
      accepted:selectedItems,
      totalPrice:totalPrice,
      orderDate:"22 شهریور 1405",
      deliveryDate:"در حال بررسی",
       orderCode:uuidv4().slice(0,5)
     }
     console.log(order);
     
    
      navigate("/payment",{state:order})
   

   }
   
  return (
    <>
    <section className={styles.InfoHolder}>
      <h3>مشخصات خریدار</h3>
       <div className={styles.customerInfo}>
             <input type="text" placeholder='نام  ' name='name' value={name}  onChange={getValue}/>
        <input type="text" placeholder=' نام خانوادگی' name='family' value={family}  onChange={getValue}/>
        <input type="tel" placeholder='تلفن' name='mobile' value={mobile}  onChange={getValue}/>
        <input type="text" placeholder='استان' name='province' value={province} onChange={getValue}/>
          <input type="text" placeholder='شهر' name='city' value={city}  onChange={getValue}/>
        <input className={styles.addressInp} type="text" placeholder='آدرس' name='address' value={address} onChange={getValue}/>
        <input className={styles.postalCodeInp} type="text" placeholder='کد پستی' name='postalCode' value={postalCode} onChange={getValue}/>
        <button disabled={!name || !family || !mobile || !province || !city || !address || !postalCode} onClick={addHandler}> ثبت اطلاعات</button>
     
          </div>
    </section>
        <p className={styles.errorType}>{errors}</p>
        
    </>
  )
}

export default Information