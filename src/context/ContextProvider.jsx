import axios from "axios";
import React, { createContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

//--------//
//context//
//------//

export const ProductContext = createContext();
 //custom hook
  export const useValidate=()=>{
        const [errors , setErrors] = useState("")
      
     const isvalidate=(data)=>{
         

     if((data.name || data.family)&&/[A-Za-z]/.test(data.name) ||/[A-Za-z]/.test(data.family)) {
        return  "از حروف بزرگ و کوچک انگلیسی استفاده نشود"
  
       }
       if(data.name.length<3  && data.name.length>0){
           return "اسم کاربر کمتر از سه حرف نباشد "
        
        }
      if(data.mobile && !/^09\d{9}$/.test(data.mobile)){
        return"شماره همراه نباید کمتر از یازده رقم باشد "
       }
       if((data.name || data.family || data.mobile) && data.name.length===0 ||data.family.length===0 || data.mobile.length===0) {
        return"لطفا نام و نام خانوادگی و تلفن همراه خود را بنویسید"
       }
      return("")
    }
    return {errors,isvalidate,setErrors}
  }

//Product Context
const ContextProvider = ({ children, descriptions, descriptionHandler }) => {
  //-----------------------//
  //------useLocation-----//
  //---------------------//
  const routes =useLocation()
  
  //--------------------//
  //states for car model//
  //-------------------//
  const [products, setProducts] = useState([]);
  const [Model, setModel] = useState("همه");
  const [filterInfo, setFilterInfo] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  //-----------------------------//
  //-----------useRef-----------//
  //---------------------------//
  const firstscrollDone = useRef(false);

  //search with input
  const [value, setValue] = useState("");
  
  //--------------------------//
  //---------saveOrder-------//
  //------------------------//
  const [saveOrders,setSaveOrders]=useState(()=>(
             JSON.parse(localStorage.getItem("keepOrder"))||[]
  
      ))
 
  //---------------------//
  //functions for input//
  //------------------//

  const getValue = (event) => {
    const inputValue = event.target.value;

    if (inputValue.length === 0) {
      setFilterInfo(products);
    }
    setValue(inputValue);
  };
  const search = () => {
    setFilterInfo(products.filter((item) => item.name.includes(value)));
  };

  //------------------------//
  //use effect for fetching//
  //-----------------------//

  useEffect(() => {
    const productdata = async () => {
      try {
        const response = await axios.get("/products/products.json");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError("خطا در برقراری ارتباط");
      }
    };
    productdata();
  }, []);

  //------------------------------//
  //use effect for set filter info//
  //-----------------------------//

  useEffect(() => {
    setFilterInfo(products);
  }, [products]);

  //------------------------------//
  //use effect for scrollModal//
  //-----------------------------//
  useEffect(() => {
    
   if(routes.pathname==='/'){
     const scrollHandler = () => {
      if (!firstscrollDone.current) {
        descriptionHandler();
        firstscrollDone.current = true;
      }
    };
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
   }
  }, [routes.pathname]);

  return (
    <>
      <ProductContext
        value={{
          products,
          setProducts,
          Model,
          setModel,
          filterInfo,
          setFilterInfo,
          value,
          setValue,
          search,
          getValue,
          error,
          loading,
          descriptionHandler,
          descriptions,
          saveOrders,
          setSaveOrders
        }}
      >
        {children}
      </ProductContext>
    </>
  );
};

export default ContextProvider;
