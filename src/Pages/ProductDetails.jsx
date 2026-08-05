import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
const params =useParams()




  return (
    <div>
      ProductDetails
      <p>{params.id}</p>
    </div>
  )

}
export default ProductDetails