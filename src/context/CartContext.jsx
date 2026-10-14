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
export const BuyContext = createContext();

const initialArg = {
  selectedItems:[],
  totalPrice: 0,
};



const reducer = (state, action) => {
  if(action.type==="setItem"){
    return{...state,selectedItems:action.payload}
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
      quantity: IncreaseQuantityOfItems[action.payload].quantity + 1
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
  //------------------------//
  //--------postcard-------//
 //------------------------//

   const guestToken =useRef(null)
   
   const [itemId,setItemId] = useState({})

    //------------------------//
   //--------errors----------//
  //------------------------//
  const [errors,setErrors]=useState("")
  const getInformation = useContext(ProductContext);
  const { products } = getInformation;

  const [state, dispatch] = useReducer(reducer, initialArg);
  //Add Items
  const showInfo = async (Info) => {

    const product = products.find((item) => item.id === Info);
    const existingItem = state.selectedItems.find((item) => item.id === Info);
    const sendValue = existingItem ? existingItem.quantity + 1 : 1
    const cartItemId  =  itemId[Info] 
    console.log(cartItemId);
    
    if (existingItem) {
      const productIndex = state.selectedItems.findIndex(
        (item) => item.id === Info,
      );
      dispatch({ type: "Increase", payload: productIndex });
     await patchQuantity(cartItemId,sendValue)
    } else {
      dispatch({ type: "AddItem", payload: product });
         await postcard(product,sendValue)

    }
    
    
    drawerHandeler();
    // getpro()
  };
  //increase The quantity
  const increaseThequantity = async (id) => {
    const productIndex = state.selectedItems.findIndex(
      (item) => item.id === id,
    );
        const product = state.selectedItems[productIndex]
        const sendValue = product.quantity + 1 
        const cartItemId = itemId[id];

        
        
        

    dispatch({ type: "Increase", payload: productIndex });
    
    
    
   await patchQuantity(cartItemId,sendValue)
    // getpro()
  };
  //decrease The quantity
  const decreaseThequantity = async (id) => {
    const productIndexdecrease = state.selectedItems.findIndex(
      (item) => item.id === id,
    );
   
     const product = state.selectedItems[productIndexdecrease]
        const sendValue = product.quantity - 1 
        const cartItemId = itemId[id]
    dispatch({ type: "Decrease", payload: productIndexdecrease });
     await patchQuantity(cartItemId,sendValue)
    // getpro()
  };

  //delete the products
  const deleteFromBasket = async (id) => {
    const deleteTheproduct = state.selectedItems.filter(
      (item) => item.id != id);
    const cartItemId = itemId[id]
    dispatch({ type: "Delete", payload: deleteTheproduct });
   await deleteProduct(cartItemId)
    // getpro()
  };

  useEffect(() => {
    const total = state.selectedItems.reduce(
      (sum, item) => sum + (item.price * item.quantity),
      0
    );
    dispatch({ type: "Sum", payload: total });
  }, [state.selectedItems]);

 useEffect(()=>{
  const cardvalue = async ()=>{
    const response =  await axios.get("https://api.mehreganpakhshpart.ir/api/cart/")
    guestToken.current = response.data.guest_token
   console.log(guestToken.current);
   
   const items = response.data.items
     
      
      
    dispatch({type:'setItem' , payload:response.data.items})
   console.log("items",items);
   
  }
  cardvalue()
 },[])


 

const postcard = async (product, sendValue) => {
 try {
    const response = await axios.post(
    "https://api.mehreganpakhshpart.ir/api/cart/items/",
    {
      product: product.id,
      quantity: sendValue,
    },
    {
      headers: {
        "X-Guest-Cart-Token": guestToken.current,
      },
    }
  );
  const cartItemId = response.data.id
   setItemId((prev)=>({...prev,[product.id]:cartItemId}))

  console.log(cartItemId);
  
  // getpro()
 } catch (error) {
    setErrors("خطا در ارتباط با سرور")   
    
    
 }
};

const patchQuantity= async (cartItemId,sendValue)=>{
  console.log(itemId);
  
 try {
   const response = await axios.patch(`https://api.mehreganpakhshpart.ir/api/cart/items/${cartItemId}/`,{quantity:sendValue },{headers:{"X-Guest-Cart-Token": guestToken.current}})
  console.log(response);
  console.log(cartItemId);
  
 } catch (error) {
    setErrors("خطا در برقراری ارتباط")
    
 }
}

const deleteProduct = async (cartItemId) =>{
    const response = await axios.delete(`https://api.mehreganpakhshpart.ir/api/cart/items/${cartItemId}`,{headers:{"X-Guest-Cart-Token": guestToken.current}})
}

//  const getpro= async()=>{
//    const response = await axios.get("https://api.mehreganpakhshpart.ir/api/cart/",
//     {
//       headers: {
//         "X-Guest-Cart-Token": guestToken.current,
//       },
//     })
//    console.log("POST",response.data.items);
   
//  }



 useEffect(()=>{
  console.log(state.selectedItems);
            

   
 },[state.selectedItems])

 

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
        errors
         
      }}
    >
      {children}
    </BuyContext>
  );
};

export default CartContext;
