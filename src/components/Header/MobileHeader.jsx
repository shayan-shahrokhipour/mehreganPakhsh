import React, { useContext } from "react";
//module css
import styles from "../Header/headerstyles/header.module.css";

//Icons
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { FaOpencart } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { BuyContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

//context
const MobileHeader = ({ drawerHandeler }) => {
  const {selectedItems} = useContext(BuyContext)

  return (
    <>
      <div className={styles.signInboxforMobile}>
        <a href="" className={styles.signinLinks}>
          <MdAccountCircle />
          <span className={styles.signInText}> ثبت نام</span>
          <br />
        </a>
       <Link className={styles.BuyLink} to='/Basket'>
                            <span className={styles.countOfproduct}>{selectedItems.length}</span>
                  <GiShoppingCart className={styles.shopIcon} />

       </Link>

      </div>
    </>
  );
};

export default MobileHeader;
