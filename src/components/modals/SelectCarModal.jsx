import React, { useContext, useEffect, useState } from "react";
import styles from "../modals/modals.module.css";
//icons
import { IoClose } from "react-icons/io5";
import { ProductContext } from "../../context/ContextProvider";
const SelectCarModal = ({ state, modalHandeler }) => {
  //Context
   const {products,setProduct,Model,setModel,filterInfo,setFilterInfo,value}=useContext(ProductContext)
   //functions
     const chooseModel=(event)=>{
   

      setModel(event.target.value)
      
  }

 const showInformation=()=>{
    console.log(Model);
      if(Model==="همه"){
         
                  setFilterInfo(products)

        
      }else{
         setFilterInfo(products.filter(item=> item.cars.includes(Model)))

      }

      
     modalHandeler()

    
        console.log(filterInfo); 
 }
  
  return (
    <>
      {state === true ? (
        <div className={styles.SelectCarModal}>
          <div className={styles.CardModalHolder}>
            <h4>ماشینت رو انتخاب کن </h4>

            <IoClose onClick={modalHandeler} className={styles.closeIcon} />
          </div>
          <p className={styles.description}>
            برای انتخاب بهتر محصولی که مد نظرتون هست میتوانید در این قسمت مدل
            ماشین خود را انتخاب کنید تا سایت برای شما شخصی سازی شود{" "}
          </p>
          <div className={styles.selectedcartInfo}>
            <div className={styles.firstLine}></div>
            <div className={styles.title}>
              <p>مدل ماشینت رو انتخاب کن </p>
            </div>
            <div className={styles.secondLine}></div>
          </div>
          <div className={styles.optionHolder}>
            <select id="cars" name="cars" value={Model} onChange={chooseModel}>
            <option value="همه">همه</option>
            <option value="206">206</option>
            <option value="405">405</option>
            <option value="سمند">سمند</option>
            <option value="پارس">پژو پارس</option>
            <option value="تندر90">تندر90</option>
            <option value="RD">RD-ROA</option>
            <option value="پراید">پراید</option>
              <option value="تیبا">تیبا</option>
          </select>
          </div>
          <button onClick={showInformation} className={styles.signIn}>کلیک کنید !</button>
        </div>
      ) : null}
    </>
  );
};

export default SelectCarModal;
