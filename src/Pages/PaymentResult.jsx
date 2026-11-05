import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { OrderContext } from "../context/OrderProvider";
import axios from "axios";
import { AutContext } from "../context/AuthProvider";

import { api } from "../services/api";
import { BuyContext } from "../context/CartContext";

const PaymentResult = () => {
  //useState

  const [error, setError] = useState("");

  const [showstatus , setShowstatus] = useState("")
  //Context
  const { dispatch } = useContext(BuyContext);
  // const {accessToken}=useContext(AutContext)
  //Params
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");
  const orderNumber = searchParams.get("order_number");
  const trackingCode = searchParams.get("tracking_code");
  const orderId = searchParams.get("order_id");

  useEffect(() => {
   if(status === "success"){
     const getShipment = async () => {
      try {
        const response = await api.get(`/api/shipments/${orderId}/`);

        dispatch({ type: "clearCard" });

        sessionStorage.removeItem("guestToken");

      } catch (error) {
        if (error.response?.data?.code === "token_not_valid") {
          setError("توکن معتبر نیست");
        } else if (error.response?.status === 404) {
          setError("شناسه سفارش اشتباه است");
        } else {
          setError("دریافت اطلاعات ارسال سفارش با مشکل مواجه شد");
        }
      }
    };
        getShipment();
     return
   } if(status === 'failed'){
       setShowstatus("عملیات پرداخت با شکست مواجه شد")
       return
   }if(status === 'pending'){
    setShowstatus("در انتظار بررسی")
      return
   }if (status === "review") {
  setShowstatus("پرداخت موفق بود و سفارش نیازمند بررسی دستی است");
  return;
}

  }, []);
  return (
    <section>
      <p>{error}</p>
      <p>{showstatus}</p>
    </section>
  );
};

export default PaymentResult;
