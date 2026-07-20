import React from "react";
//module css
import styles from "../Header/headerstyles/header.module.css";

//Icons
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { FaOpencart } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const MobileHeader = ({ drawerHandeler }) => {
  return (
    <>
      <div className={styles.signInboxforMobile}>
        <a href="" className={styles.signinLinks}>
          <MdAccountCircle />
          <span className={styles.signInText}> ثبت نام</span>
          <br />
        </a>
        <a href=""></a>
        <GiShoppingCart className={styles.shopIcon} />
      </div>
    </>
  );
};

export default MobileHeader;
