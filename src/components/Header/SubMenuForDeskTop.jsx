import React from 'react'
import styles from "../Header/headerstyles/header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const SubMenuForDeskTop = ({drawerHandeler}) => {
  return (
    <section className={styles.subMenuforDesktop}>
        <ul>
          <li onClick={drawerHandeler}  className={`${styles.hoverAnimation} ${styles.hamburgerIconforDesktop}`}>
            <GiHamburgerMenu />
            <span className={styles.all}>همه</span>
          </li>
          <li className={styles.hoverAnimation}>
       
              <Link to="/calltous">  ارتباط با ما </Link>
          </li>
          <li className={styles.hoverAnimation}>
            <Link to="/aboutus"> درباره ما</Link>
          </li>
        
          <li className={styles.hoverAnimation}>
            <a href="">پیگیری سفارش</a>
          </li>
          <li className={styles.hoverAnimation}>
            <a href="">پشتیبانی</a>
          </li>
        </ul>
      </section>
      
  )
}

export default SubMenuForDeskTop