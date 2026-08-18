import React, { useContext, useState } from 'react'
import styles from '../components/Basket/basket.module.css'
import { useNavigate } from 'react-router-dom'
import { BuyContext } from '../context/CartContext'
const Information = ({getInfo,setGetInfo}) => {
 
   //context
   const {selectedItems} = useContext(BuyContext) 
   
   const [errors,setErrors]=useState("");
   //props
   const {name,family,mobile,province,city,address,postalCode}=getInfo
   //navigate
   const navigate = useNavigate()

   const getValue=(event)=>{
    const val = event.target.value;
    const name = event.target.name;
    
    setGetInfo(item=> ({...item,[name]:val}))
      
    if((name==="name" || name==="family" || name==="province" || name==="city")&&/[A-Za-z]/.test(val)) {
          setErrors("از حروف بزرگ و کوچک انگلیسی استفاده نشود")
          return;
       }
       if(name==="name" && val.length<3 && val.length>0){
        setErrors("اسم کاربر کمتر از سه حرف نباشد ")
        return
       }
       if(name==="mobile" && !/^09\d{9}$/.test(val)){
        setErrors("شماره همراه نباید کمتر از یازده رقم باشد ")
        return
       }
       if((name==="name" || name==="family" || name==="mobile") && val.length===0){
        setErrors("لطفا نام و نام خانوادگی و تلفن همراه خود را بنویسید")
        return
       }if(name==="postalCode" && !/^\d{10}$/.test(val)){
        setErrors("کد پستی باید ده رقم باشد ")
        return
       }
       setErrors("")
   }

    const addHandler=()=>{
     const order={
      customer:getInfo,
      accepted:selectedItems
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
        <button disabled={!name || !family || !mobile || !province || !city || !address || !postalCode} onClick={addHandler}>ثبت اطلاعات</button>
     
          </div>
    </section>
        <p className={styles.errorType}>{errors}</p>
        
    </>
  )
}

export default Information