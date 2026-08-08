import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

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
      const response = await axios.get("/products/products.json");
      setProducts(response.data);
    };
    productdata();
  }, []);

  //------------------------------//
  //use effect for set filter info//
  //-----------------------------//

  useEffect(() => {
    setFilterInfo(products);
  }, [products]);
  


  return (
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
        getValue
       
      }}
    >
      {children}
    </ProductContext>
  );
};

export default ContextProvider;
