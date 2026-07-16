import React, { useEffect, useState } from "react";
//module css
import styles from "../Header/header.module.css";

//components
import DrawerMenu from "./DrawerMenu";
import SubMenuForDeskTop from "./SubMenuForDeskTop";
import SubMenuForMobile from "./SubMenuForMobile";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
const Header = () => {
  const [closeWindow, setCloseWindow] = useState(false);
  const drawerHandeler = () => {
    setCloseWindow(!closeWindow);
  };
  return (
    <>
      <DrawerMenu closeWindow={closeWindow} drawerHandeler={drawerHandeler} />

      <header>
        {/*===============================================*/}
        <DesktopHeader drawerHandeler={drawerHandeler} />
        {/*===============================================*/}

        <MobileHeader drawerHandeler={drawerHandeler} />
       {/*===============================================*/}

        <SubMenuForMobile />
      </header>

        {/*===============================================*/}
      <SubMenuForDeskTop drawerHandeler={drawerHandeler} />
      <div
        className={`${styles.overlay} ${
          closeWindow ? styles.overlayActive : null
        }`}
      ></div>
    </>
  );
};

export default Header;
