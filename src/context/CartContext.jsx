import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { ProductContext } from "./ContextProvider";
export const BuyContext = createContext();

const initialArg = {
  selectedItems: [],
  totalPrice: 0,
};

const reducer = (state, action) => {
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
  }if (action.type==="clearCard"){
    return{...state, selectedItems:[],totalPrice:0}
  }
};
const CartContext = ({ children, drawerHandeler }) => {
  const getInformation = useContext(ProductContext);
  const { products } = getInformation;

  const [state, dispatch] = useReducer(reducer, initialArg);
  //Add Items
  const showInfo = (Info) => {

    const product = products.find((item) => item.id === Info);
    const existingItem = state.selectedItems.find((item) => item.id === Info);
    if (existingItem) {
      const productIndex = state.selectedItems.findIndex(
        (item) => item.id === Info,
      );
      dispatch({ type: "Increase", payload: productIndex });
    } else {
      dispatch({ type: "AddItem", payload: product });
    }

    drawerHandeler();
  };
  //increase The quantity
  const increaseThequantity = (id) => {
    const productIndex = state.selectedItems.findIndex(
      (item) => item.id === id,
    );
    dispatch({ type: "Increase", payload: productIndex });
  };
  //decrease The quantity
  const decreaseThequantity = (id) => {
    const productIndexdecrease = state.selectedItems.findIndex(
      (item) => item.id === id,
    );
    dispatch({ type: "Decrease", payload: productIndexdecrease });
  };

  //delete the products
  const deleteFromBasket = (id) => {
    const deleteTheproduct = state.selectedItems.filter(
      (item) => item.id != id,
    );

    dispatch({ type: "Delete", payload: deleteTheproduct });
  };

  useEffect(() => {
    const total = state.selectedItems.reduce(
      (sum, item) => sum + (item.price * item.quantity),
      0
    );
    dispatch({ type: "Sum", payload: total });
  }, [state.selectedItems]);

  return (
    <BuyContext
      value={{
        showInfo,
        selectedItems: state.selectedItems,
        increaseThequantity,
        decreaseThequantity,
        deleteFromBasket,
        totalPrice: state.totalPrice,
        dispatch
      }}
    >
      {children}
    </BuyContext>
  );
};

export default CartContext;
