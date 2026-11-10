import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { ProductContext } from "./ContextProvider";
import axios from "axios";

import {cartApi} from '../services/api'
import { useLocation } from "react-router-dom";

export const BuyContext = createContext();

const initialArg = {
  selectedItems: [],
  totalPrice: 0,
};

const reducer = (state, action) => {
  if (action.type === "setItem") {
    return { ...state, selectedItems: action.payload };
  }
  if (action.type === "AddItem") {
    return {
      ...state,
      selectedItems: [
        ...state.selectedItems,
        { ...action.payload, quantity: 1 },
      ],
    };
  }
  if (action.type === "Increase") {
    const IncreaseQuantityOfItems = [...state.selectedItems];
    IncreaseQuantityOfItems[action.payload] = {
      ...IncreaseQuantityOfItems[action.payload],
      quantity: IncreaseQuantityOfItems[action.payload].quantity + 1,
    };

    return {
      ...state,
      selectedItems: IncreaseQuantityOfItems,
    };
  }
  if (action.type === "Decrease") {
    const DecreaseQuantityOfItems = [...state.selectedItems];
    DecreaseQuantityOfItems[action.payload] = {
      ...DecreaseQuantityOfItems[action.payload],
      quantity: DecreaseQuantityOfItems[action.payload].quantity - 1,
    };

    return { ...state, selectedItems: DecreaseQuantityOfItems };
  }
  if (action.type === "Delete") {
    return { ...state, selectedItems: action.payload };
  }
  if (action.type === "Sum") {
    return { ...state, totalPrice: action.payload };
  }
  if (action.type === "clearCard") {
    return { ...state, selectedItems: [], totalPrice: 0 };
  }
};
const CartContext = ({ children, drawerHandeler }) => {
 
const location = useLocation()

  const [itemId, setItemId] = useState({});
  //------------------------//
  //---------basket--------//
  //-----------------------//

  const [loadingRequest, setLoadingRequest] = useState({});
  const lockRequest = useRef({});
  //------------------------//
  //--------errors----------//
  //------------------------//

  const [errors, setErrors] = useState("");
  const getInformation = useContext(ProductContext);
  const { products } = getInformation;
  const [state, dispatch] = useReducer(reducer, initialArg);
   
  const cartItemId = useRef(null)
  
  //Add Items
  const showInfo = async (Info) => {
    const product = products.find((item) => item.id === Info);
    const existingItem = state.selectedItems.find((item) => item.id === Info);
    const sendValue = existingItem ? existingItem.quantity + 1 : 1;
    const cartItemId = itemId[Info];
   

    try {
      if (existingItem) {
        const productIndex = state.selectedItems.findIndex(
          (item) => item.id === Info,
        );
        await patchQuantity(cartItemId, sendValue);

        dispatch({ type: "Increase", payload: productIndex });
      } else {
        await postcard(product, sendValue);

        dispatch({ type: "AddItem", payload: product });
      }
      drawerHandeler();
     await getpro(Info);
    } catch (error) {
      setErrors("محصول موجود نیست");
    }
  };
  //increase The quantity
  const increaseThequantity = async (id) => {
    const productIndex = state.selectedItems.findIndex(
      (item) => item.id === id,
    );
    if (lockRequest.current[id]) return;

    const product = state.selectedItems[productIndex];
    const sendValue = product.quantity + 1;
    const cartItemId = itemId[id];
    lockRequest.current[id] = true;
    setLoadingRequest((prev) => ({ ...prev, [id]: true }));

    try {

      await patchQuantity(cartItemId, sendValue);
      dispatch({ type: "Increase", payload: productIndex });
      await getpro(id);
    } catch (error) {
      setErrors(error.response?.data?.quantity);
    } finally {
      lockRequest.current[id] = false;

      setLoadingRequest((prev) => ({ ...prev, [id]: false }));
    }
  };

  //decrease The quantity
  const decreaseThequantity = async (id) => {
    const productIndexdecrease = state.selectedItems.findIndex(
      (item) => item.id === id,
    );
    if (lockRequest.current[id]) return;
    const product = state.selectedItems[productIndexdecrease];
    const sendValue = product.quantity - 1;
    const cartItemId = itemId[id];
    lockRequest.current[id] = true;
    setLoadingRequest((prev) => ({ ...prev, [id]: true }));
    try {
      await patchQuantity(cartItemId, sendValue);
      dispatch({ type: "Decrease", payload: productIndexdecrease });
      await getpro(id);
    } catch (error) {
      setErrors("کاهش تعداد با موفقیت انجام نشد");
    } finally {
      lockRequest.current[id] = false;

      setLoadingRequest((prev) => ({ ...prev, [id]: false }));
    }
  };

  //delete the products
  const deleteFromBasket = async (id) => {
    const deleteTheproduct = state.selectedItems.filter(
      (item) => item.id != id,
    );
    const cartItemId = itemId[id];
    if (lockRequest.current[id]) return;
    lockRequest.current[id] = true;
    try {
      await deleteProduct(cartItemId);
      dispatch({ type: "Delete", payload: deleteTheproduct });

      await getpro(id);
    } catch (error) {
      setErrors("عدم ارسال به سرور");
    } finally {
      lockRequest.current[id] = false;
    }
  };

  //get basket in first Load

  useEffect(()=>{
      if (location.pathname === "/payment-result") return;

     const firstloadBasket = async () => {
       try {
          const response = await cartApi.get("/api/cart/")
        const repaired = response.data.items.map(change => ({
           id:change.product,
           cartItemId:change.id,
           name:change.product_name,
           price:change.product_price,
           img:`https://api.mehreganpakhshpart.ir${change.img}`,
           quantity:change.quantity

        }))
        setItemId(
  Object.fromEntries(
    repaired.map(item => [item.id, item.cartItemId])
  )
);



dispatch({ type: "Sum", payload: response.data.subtotal });

        dispatch({type:"setItem", payload:repaired})
        
       } catch (error) {
        setErrors(
        error.response?.data?.detail ||
        "دریافت اطلاعات سبد خرید با مشکل مواجه شد."
      );
       }
       
     }
     firstloadBasket()
  },[])

  const postcard = async (product, sendValue) => {
    setErrors("");
    try {
      const response = await cartApi.post(
        "/api/cart/items/",
        {
          product: product.id,
          quantity: sendValue,
        },
      
      );

      sessionStorage.setItem("guestToken",response.data.guest_token)

       cartItemId.current = response.data.id;

      setItemId((prev) => ({ ...prev, [product.id]: cartItemId.current }));
       
    } catch (error) {
      setErrors("خطا در ارتباط با سرور");
      throw error;
    }
  };

  const patchQuantity = async (cartItemId, sendValue) => {
    setErrors("");

      const response = await cartApi.patch(
        `/api/cart/items/${cartItemId}/`,
        { quantity: sendValue },
        
      );
    
  };

  const deleteProduct = async (cartItemId) => {
    setErrors("");

    try {
      const response = await cartApi.delete(
        `/api/cart/items/${cartItemId}/`,
       
      );
    } catch (error) {
      setErrors("محصولی برای حذف پیدا نشد ");
      throw error;
    }
  };

  const getpro = async (id) => {
   
      try {
        const response = await cartApi.get(
        "/api/cart/"
      );

      

      
      dispatch({ type: "Sum", payload: response.data.subtotal });
      } catch (error) {
         setErrors(
      error.response?.data?.detail ||
      "به‌روزرسانی اطلاعات سبد خرید با مشکل مواجه شد."
    );
      }

    
  };

  
  return (
    <BuyContext
      value={{
        showInfo,
        selectedItems: state.selectedItems,
        increaseThequantity,
        decreaseThequantity,
        deleteFromBasket,
        totalPrice: state.totalPrice,
        dispatch,
        errors,
        setErrors,
        loadingRequest,
       
      }}
    >
      {children}
    </BuyContext>
  );
};

export default CartContext;
