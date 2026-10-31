import React from 'react'
import { useSearchParams } from 'react-router-dom'

const PaymentResult = () => {
    //searchParams
    const [searchParams] = useSearchParams()
    const status =searchParams.get('status')
    const orderNumber =searchParams.get('order_number')
    const trackingCode =searchParams.get('tracking_code')
    console.log(trackingCode,orderNumber,status);
    
  return (
    <div>PaymentResult</div>
  )
}

export default PaymentResult