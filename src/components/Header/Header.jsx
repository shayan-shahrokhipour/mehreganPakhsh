import React, { useContext, useEffect, useState } from "react";
//module css
import styles from "../Header/headerstyles/header.module.css";

//components
import DrawerMenu from "./DrawerMenu";
import SubMenuForDeskTop from "./SubMenuForDeskTop";
import SubMenuForMobile from "./SubMenuForMobile";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import SelectCarModal from "../modals/SelectCarModal";
import SignInModal from "../modals/SignInModal";
import { ProductContext } from "../../context/ContextProvider";


const Header = ({drawerHandeler,state,modalHandeler,onmouseEnter,onmouseLeave}) => {
 //Context
   const getProducts=useContext(ProductContext)
   const {id,name,cars}=getProducts
   //states
     const [Model,setModel]=useState("همه")
     const [filterInfo,setFilterInfo]=useState([])
     //functions
     const chooseModel=(event)=>{
      setModel(event.target.value)
  }

 const showInformation=()=>{
    console.log(Model); 
    
setFilterInfo(getProducts.filter(item=> item.cars.includes(Model)))

  
        console.log(filterInfo);
        

  
    
 }
 //destructures
  const {drawer,modal,onmouse}=state
  return (
    <>
      <DrawerMenu   drawerHandeler={drawerHandeler}
        state={state.drawer} />

      <header className={onmouse ? styles.headerActive : ""}>
        {/*===============================================*/}
        <DesktopHeader  drawerHandeler={drawerHandeler} modalHandeler={modalHandeler} onmouseEnter={onmouseEnter} onmouseLeave={onmouseLeave} Model={Model}/>
        {/*===============================================*/}

        <MobileHeader />
       {/*===============================================*/}

        <SubMenuForMobile />
      </header>
                   

              
        {/*===============================================*/}
      <SubMenuForDeskTop drawerHandeler={drawerHandeler}/>

        {/*==========================================*/}

       <SelectCarModal state={state.modal} modalHandeler={modalHandeler} showInformation={showInformation} chooseModel={chooseModel}/>

       {/*==========================================*/}

        <SignInModal state={state.onmouse}/>
      <div
        className={`${styles.overlay} ${
          state.drawer || state.modal || state.onmouse ? styles.overlayActive : ""
        }`}
      ></div>
      
    </>
  );
};

export default Header;
