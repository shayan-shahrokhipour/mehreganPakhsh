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
 //---------basket--------//
//-----------------------//

const [quantityValue,setQuantityValue]=useState({})
const [loadingRequest,setLoadingRequest] = useState({}) 

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
    
    try {
      if (existingItem) {
      const productIndex = state.selectedItems.findIndex(
        (item) => item.id === Info,
      );
           await patchQuantity(cartItemId,sendValue)

      dispatch({ type: "Increase", payload: productIndex });
    } else {
               await postcard(product,sendValue)

      dispatch({ type: "AddItem", payload: product });

    }
    drawerHandeler();
    getpro(Info)
    } catch (error) {
        setErrors("عدم ارتباط با سبد خرید ")
    }
    
    
    
    
  };
  //increase The quantity
  const increaseThequantity = async (id) => {
    const productIndex = state.selectedItems.findIndex(
      (item) => item.id === id,
    );
         if(loadingRequest[id])return
         
        const product = state.selectedItems[productIndex]
        const sendValue = product.quantity + 1 
        const cartItemId = itemId[id];  
          setLoadingRequest((prev) => ({ ...prev, [id]: true }));
          
      try {
        console.log(state.selectedItems.quantity);
    
        
            await patchQuantity(cartItemId,sendValue)
        dispatch({ type: "Increase", payload: productIndex });
            getpro(id)

      } catch (error) {
        setErrors("افزایش تعداد انجام نشد")
      }finally{
          setLoadingRequest((prev) => ({ ...prev, [id]: false }));
            
      }
    
    
   
  };


  //decrease The quantity
  const decreaseThequantity = async (id) => {
    const productIndexdecrease = state.selectedItems.findIndex(
      (item) => item.id === id,
    );
         if(loadingRequest[id])return
     const product = state.selectedItems[productIndexdecrease]
        const sendValue = product.quantity - 1 
        const cartItemId = itemId[id]
          setLoadingRequest((prev) => ({ ...prev, [id]: true }));
       try {
         await patchQuantity(cartItemId,sendValue)
    dispatch({ type: "Decrease", payload: productIndexdecrease });
    getpro(id)
       } catch (error) {
         setErrors("کاهش تعداد با موفقیت انجام نشد")
       }finally{
                  setLoadingRequest((prev) => ({ ...prev, [id]: false }));

       }
       
  };

  //delete the products
  const deleteFromBasket = async (id) => {
    const deleteTheproduct = state.selectedItems.filter(
      (item) => item.id != id);
    const cartItemId = itemId[id]
    try {
       await deleteProduct(cartItemId)
    dispatch({ type: "Delete", payload: deleteTheproduct });
   
    getpro(id)
    } catch (error) {
      setErrors("عدم ارسال به سرور")
    }
  };

  

 useEffect(()=>{
  const cardvalue = async ()=>{
     try {
    const response =  await axios.get("https://api.mehreganpakhshpart.ir/api/cart/")
    guestToken.current = response.data.guest_token
   console.log(guestToken.current);
   
   const items = response.data.items
      dispatch({type:'setItem' , payload:response.data.items})
   
           console.log("items",items);
           

    } catch (error) {
       setErrors("عدم ارتباط با سبد خرید")
    }
     
         

      
   
  }
  cardvalue()
 },[])


 

const postcard = async (product, sendValue) => {
  setErrors("");
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
 
  
  
 } catch (error) {
    setErrors("خطا در ارتباط با سرور") 
    console.error(error)  
    throw error
    
 }
};

const patchQuantity= async (cartItemId,sendValue)=>{
  setErrors("");
  console.log(itemId);
  
 try {
   const response = await axios.patch(`https://api.mehreganpakhshpart.ir/api/cart/items/${cartItemId}/`,{quantity:sendValue },{headers:{"X-Guest-Cart-Token": guestToken.current}})
  console.log(response);
  console.log(cartItemId);
  
 } catch (error) {
    setErrors("خطا در برقراری ارتباط")
        throw error;

 }
}

const deleteProduct = async (cartItemId) =>{
      setErrors("");

  try {
    const response = await axios.delete(`https://api.mehreganpakhshpart.ir/api/cart/items/${cartItemId}`,{headers:{"X-Guest-Cart-Token": guestToken.current}})
  } catch (error) {
    setErrors("محصولی برای حذف پیدا نشد ")
    throw error
  }
}

 const getpro= async(id)=>{
  try {
      const response = await axios.get("https://api.mehreganpakhshpart.ir/api/cart/",
    {
      headers: {
        "X-Guest-Cart-Token": guestToken.current,
      },
    })
   
    const item = response.data.items.find(item => item.product === id)

    if(item){
              setQuantityValue(quantity=> ({...quantity,[id]:item.quantity}))

          console.log(item.quantity);

    }    
     dispatch({type:"Sum", payload:response.data.subtotal})

   console.log("POST",response.data.items);
   
  
   
   
  } catch (error) {
    setErrors("خطایی رخ داده است")
  }
   
 }


 useEffect(()=>{
  console.log(state.selectedItems);
  // console.log(total);
         

   
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
        errors,
         setErrors,
         quantityValue,
         loadingRequest
      }}
    >
      {children}
    </BuyContext>
  );
};

export default CartContext;
