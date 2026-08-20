import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";

//--------//
//context//
//------//

export const ProductContext = createContext();
//Product Context
const ContextProvider = ({ children }) => {
  //--------------------//
  //states for car model//
  //-------------------//
  const [products, setProducts] = useState([]);
  const [Model, setModel] = useState("همه");
  const [filterInfo, setFilterInfo] = useState([]);
  const [error,setError]=useState(null)
   const [loading,setLoading]=useState(true)
  //search with input
  const [value, setValue] = useState("");

  //---------------------//
  //functions for input//
  //------------------//

  const getValue = (event) => {
     const inputValue = event.target.value;

    if(inputValue.length===0){

      setFilterInfo(products)
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
      try{
         const response = await axios.get("/products/products.json");
         setProducts(response.data)
         setLoading(false)
      }catch(error){
        
         setError('خطا در برقراری ارتباط')
      }

    };
             productdata()

  }, []);

  //------------------------------//
  //use effect for set filter info//
  //-----------------------------//

  useEffect(() => {
    setFilterInfo(products);
  }, [products]);
  
   

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
        loading
       
      }}
    >

      {children}
    </ProductContext>
    </>
  );
  
};

export default ContextProvider;
