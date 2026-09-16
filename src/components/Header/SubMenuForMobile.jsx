import React from 'react'
import styles from "../Header/headerstyles/header.module.css";
import { Link } from 'react-router-dom';

const SubMenuForMobile = () => {
  return (
<div className={styles.submenuforMobile}>
          <ul>
            <li className={styles.hoverAnimation}>
                        <Link to="/aboutus"> درباره ما</Link>
                      </li>
                       <li className={styles.hoverAnimation}>
                   
                          <Link to="/calltous">  ارتباط با ما و پشتیبانی</Link>
                      </li>
                      <li className={styles.hoverAnimation}>
                        <Link to={'/trackOrder'}>پیگیری سفارش</Link>
                      </li>
                      
          </ul>
        </div>
  )
}

export default SubMenuForMobile