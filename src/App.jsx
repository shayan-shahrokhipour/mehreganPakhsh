import { useContext, useReducer, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";

import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero/Hero";
//context
import ContextProvider, { ProductContext } from "./context/ContextProvider";
import CartContext from "./context/CartContext";

import ProductDetails from "./Pages/ProductDetails";
import Footer from "./components/footer/Footer";
import Basket from "./components/Basket/Basket";
import Payment from "./Pages/Payment";
import Page404 from "./Pages/Page404";
import Description from "./components/modals/Description";
import Aboutus from "./Pages/Aboutus";
import Calltous from "./Pages/Calltous";
//use Reducer
const initialState = {
  drawer: false,
  modal: false,
  onmouse: false,
  descriptions:false,
  firstscrollDone:false
};
const reducer = (state, action) => {
  switch (action.type) {
    case "toggleDrawer":
      return { ...state, drawer: !state.drawer };

    case "toggleModal":
      return { ...state, modal: !state.modal };
    case "onmouseon":
      return { ...state, onmouse: true };
    case "onmouseLeave":
      return { ...state, onmouse: false };
    case "description":
      return {...state,descriptions:true}
      case"descriptionClose":
      return{...state,descriptions:false}
    default:
      return state;
  }
};

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const drawerHandeler = () => {
    dispatch({ type: "toggleDrawer" });
  };

  const modalHandeler = () => {
    dispatch({ type: "toggleModal" });
  };

  const onmouseEnter = () => {
    setTimeout(() => {
      dispatch({ type: "onmouseon" });
    }, 200);
  };

  const onmouseLeave = () => {
    setTimeout(() => {
      dispatch({ type: "onmouseLeave" });
    }, 200);
  };

   const descriptionHandler=()=>{
    dispatch({type:"description"})
   }

   const descriptionClose=()=>{
    dispatch({type:"descriptionClose"})
   }
  
 

  return (
    <>
      <ContextProvider descriptions={state.descriptions} descriptionHandler={descriptionHandler}>
        <CartContext drawerHandeler={drawerHandeler}>
         <div className='app'>
           <Header
            state={state}
            drawerHandeler={drawerHandeler}
            modalHandeler={modalHandeler}
            onmouseEnter={onmouseEnter}
            onmouseLeave={onmouseLeave}
          />

          <main className="mainContent">
            <Routes>
            <Route path="/" element={<><Hero /> <Description descriptions={state.descriptions}descriptionClose={descriptionClose}/></>} />
            <Route path="calltous" element={<Aboutus/>}/>
            <Route path="aboutus" element={<Calltous/>}/>
            <Route path="productDetails/:id" element={<ProductDetails />} />
            <Route path="basket" element={<Basket />} />
             <Route path="payment" element={<Payment/>}/>
             <Route path="*" element={<Page404/>}/>
          </Routes>
          </main>
          <Footer/>
         </div>
        </CartContext>
      </ContextProvider>
    </>
  );
}

export default App;
