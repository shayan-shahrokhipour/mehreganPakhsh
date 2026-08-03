import React, { useContext } from 'react'
//module css
import styles from "../Header/headerstyles/header.module.css";



//Icons
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { MdAccountCircle } from "react-icons/md";
import { IoClose } from "react-icons/io5";
//import Context
import { ProductContext } from '../../context/ContextProvider';
const DesktopHeader = ({drawerHandeler,state,modalHandeler,onmouseEnter,onmouseLeave}) => {
      //Context
         const {Model}=useContext(ProductContext)
  return (
      <>
      <div className={styles.logo}>
          <span  onClick={drawerHandeler} className={styles.hamburgerIcon}>
            <GiHamburgerMenu />
          </span>
          <img src="/mehreganPakhsh.png" alt="" />
        </div>
        <div onClick={modalHandeler} className={`${styles.hoverAnimation} ${styles.selectCar}`}>
            <span className={styles.topText}>انتخاب خودرو:</span> <br />
            <span className={styles.car}>{Model}</span>
        </div>
        <div className={styles.inputHolder}>
          <input type="text" className={styles.searchInput} placeholder="جست و جو در مهرگان پخش ..."/>
          <button className={styles.searchButton}>
            <IoIosSearch className={styles.searchIcon}/>
          </button>
        </div>
        
        <div onMouseEnter={onmouseEnter} onMouseLeave={onmouseLeave}  className={`${styles.hoverAnimation} ${styles.signinboxforDesktop}`}>
          <a  href="" className={styles.signinLinksDesktop}>
            <span className={styles.signInTextDesktop}> سلام , ثبت نام</span>
            <br />
            <span className={styles.signinAccountsdesktop}>
              اکانت ها و لیست ها
            </span>
          </a>
          <a href=""></a>
        </div>
        <div className={`${styles.hoverAnimation} ${styles.returnBox}`}>
          <a href="" className={styles.returnsLink}>
            <span className={styles.returns}>مرجوعی ها</span>
            <br /> <span className={styles.orders}>و سفارشات</span>
          </a>
        </div>
        <div className={`${styles.hoverAnimation} ${styles.shoppingCart}`}>
          <GiShoppingCart className={styles.shopiconDesk} />
        </div>
      </>
  )
}

export default DesktopHeader