import React, { useContext, useState } from "react";
import styles from "../Header/headerstyles/header.module.css";
//Context
import { BuyContext } from "../../context/CartContext";
//react Icon
import { IoClose } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
const DrawerMenu = ({ state, drawerHandeler, modalHandeler }) => {
  const { selectedItems,increaseThequantity} = useContext(BuyContext);
   
  return (
    <div
      className={`${styles.drawerMenu} ${state === true ? styles.drawerMenuActive : ""}`}
    >
      <IoClose onClick={drawerHandeler} className={styles.closeIcon} />
      {selectedItems.map((item) => (
        <div className={styles.selectedProducts} key={item.id}>
          <p>{item.name}</p>
          <p>مبلغ قابل پرداخت :{item.price.toLocaleString("fa-IR")}</p>
          <div className={styles.buttonHolder}>
            <FaPlus onClick={()=>increaseThequantity(item.id)} className={styles.iconsBuy}/>
            <p>{item.quantity}</p>
          {item.quantity===1 ? <FaTrash className={styles.iconsBuy}/> : <FaMinus  className={styles.iconsBuy}/>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DrawerMenu;
