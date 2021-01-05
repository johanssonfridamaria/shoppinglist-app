import React from 'react'

const ProductName = ({product}) => {
  return (
    <div className="title">
      <p>{product.name}</p>
    </div>
  )
}

export default ProductName
