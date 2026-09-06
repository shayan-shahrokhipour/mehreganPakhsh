import React from 'react'
import styles from "../Header/headerstyles/header.module.css";
import { Link } from 'react-router-dom';

const SubMenuForMobile = () => {
  return (
<div className={styles.submenuforMobile}>
          <ul>
            <li>
              <Link to="/calltous">  ارتباط با ما </Link>
            </li>
            <li>
              <a href="">درباره ما</a>
            </li>
           
            <li>
              <a href="">پیگیری سفارش</a>
            </li>
            <li>
              <a href="">پشتیبانی</a>
            </li>
          </ul>
        </div>
  )
}

export default SubMenuForMobile