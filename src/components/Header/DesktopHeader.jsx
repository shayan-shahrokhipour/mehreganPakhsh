import React from 'react'
//module css
import styles from "../Header/header.module.css";

//Icons
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { FaOpencart } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import { IoClose } from "react-icons/io5";
const DesktopHeader = ({drawerHandeler}) => {
  return (
      <>
      <div className={styles.logo}>
          <span  onClick={drawerHandeler} className={styles.hamburgerIcon}>
            <GiHamburgerMenu />
          </span>
          <img src="/mehreganPakhsh.png" alt="" />
        </div>
        <div className={`${styles.hoverAnimation} ${styles.selectCar}`}>
          <a href="" className={styles.selectedLinks}>
            <span className={styles.topText}>انتخاب خودرو:</span> <br />
            <span className={styles.car}>پژو</span>
          </a>
        </div>
        <div className={styles.inputHolder}>
          <input type="text" className={styles.searchInput} placeholder="جست و جو در مهرگان پخش ..."/>
          <button className={styles.searchButton}>
            <IoIosSearch className={styles.searchIcon}/>
          </button>
        </div>
        <div className={`${styles.hoverAnimation} ${styles.returnBox}`}>
          <a href="" className={styles.returnsLink}>
            <span className={styles.returns}>مرجوعی ها</span>
            <br /> <span className={styles.orders}>و سفارشات</span>
          </a>
        </div>
        <div className={`${styles.hoverAnimation} ${styles.signinboxforDesktop}`}>
          <a href="" className={styles.signinLinksDesktop}>
            <span className={styles.signInTextDesktop}> سلام , ثبت نام</span>
            <br />
            <span className={styles.signinAccountsdesktop}>
              اکانت ها و لیست ها
            </span>{" "}
          </a>
          <a href=""></a>
        </div>
        <div className={`${styles.hoverAnimation} ${styles.shoppingCart}`}>
          <GiShoppingCart className={styles.shopiconDesk} />
        </div>
      </>
  )
}

export default DesktopHeader