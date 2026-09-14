import React, { useState } from 'react'

const CheckTrackOrder = ({buttonHandler,checkOrder,checkOrderCode,orderValue,errorforordercode}) => {
   
       
  return (
    <section>
        <input type="text" value={checkOrder} onChange={checkOrderCode}/>
        <button onClick={buttonHandler}>
            وضعیت سفارش
        </button>
        <p>{errorforordercode}</p>
    </section>
      
  )
}

export default CheckTrackOrder