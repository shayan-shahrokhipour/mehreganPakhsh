import React, { useEffect, useState } from "react";
import styles from "../Pages/productDetails.module.css";
import {
  FaBoxes,
  FaCheck,
  FaMedal,
  FaRocket,
  FaUserFriends,
} from "react-icons/fa";
const Aboutus = () => {
  const [missionid, setMissionId] = useState("mission");
  useEffect(() => {
    missionid === "mission"
      ? console.log("mission onClicked")
      : console.log("wrong id");
  }, [missionid]);
  const clickHandler = (event) => {
    setMissionId(event.target.id);
  };
  return (
    <section className={styles.aboutUsHero}>
      <div className={styles.imgHolder}>
        <img src="/ABOUTUS/aboutus.jpg" alt="aboutus" />
        <div className={styles.backgroundImg}></div>
      </div>
      <div className={styles.secondRowAboutUs}>
        <div className={styles.descriptionHolder}>
          <span className={styles.firstSpan}>درباره ما</span>
          <p>یکی از سریع ترین راه ها برای فراهم کردن لوازم یدکی خودرو شما</p>
          <span className={styles.descriptionAboutUs}>
            مهرگان پخش با سابقه ای 40 ساله از فروش قطعات گلف , پاسات , ایودی
            شروع به کار کرد و امروز با فروش لوازم یدکی و پخش لوازم پژو و پراید
            داره ادامه میده و در تمام این سال ها هدفش این بوده که کالای با کیفیت
            به تمام مردم ایران ارائه بده
          </span>
          <h4>ما در مهرگان پخش</h4>
          <div className={styles.works}>
            <div className={styles.workHolder}>
              <FaCheck className={styles.checkIcon} />
              <span>پخش عمده</span>
            </div>
            <div className={styles.workHolder}>
              <FaCheck className={styles.checkIcon} />
              <span>تک فروشی</span>
            </div>
            <div className={styles.workHolder}>
              <FaCheck className={styles.checkIcon} />
              <span> آنلاین</span>
            </div>
            <div className={styles.workHolder}>
              <FaCheck className={styles.checkIcon} />
              <span>حضوری </span>
            </div>
          </div>
        </div>

        <div className={styles.imgBrand}>
          <img src="/ABOUTUS/mehreganBrand.jpg" alt="" />
        </div>
      </div>
      <div className={styles.middleSectionAbout}>
        <div className={styles.experience}>
          <FaMedal className={styles.middleIcons} />
          <span>+40سال سابقه</span>
        </div>
        <div className={styles.experience}>
          <FaBoxes className={styles.middleIcons} />
          <span>بالای 1000 قلم اجناس</span>
        </div>
        <div className={styles.experience}>
          <FaUserFriends className={styles.middleIcons} />
          <span>تیم حرفه ای </span>
        </div>
        <div className={styles.experience}>
          <FaRocket className={styles.middleIcons} />
          <span> ارسال فوری</span>
        </div>
      </div>
      <div className={styles.myMissions}>
        <div className={styles.rightMissions}></div>
        <div className={styles.leftMissions}>
          <span className={styles.aboutMission}>ماموریت ما </span>
          <h3>هدف اصلی ما خدمت محلی و خدمت در سطح کشور </h3>
          <div className={styles.badgeHolder}>
            <span id="mission" onClick={clickHandler} className={styles.badge}>
              ماموریت ما
            </span>
                      <span id="vision" onClick={clickHandler} className={styles.badge}>چشم انداز ما</span>

            <span id="goal"  onClick={clickHandler} className={styles.badge}>هدف ما</span>
          </div>
          {missionid === 'mission' &&  
           <div className={styles.missionHolder}> 
            <p>ماموریت ما</p>
           </div>
}
         {missionid==='vision' && 
          <div className={styles.missionHolder}>
             <p>چشم انداز ما</p>
          </div>
          }
          {missionid==='goal' && 
          <div className={styles.missionHolder}>
              <p>هدف ما</p>
            </div>}
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
