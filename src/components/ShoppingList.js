import React from 'react'
import Product from './Product/Product'

const ShoppingList = ({products, removeProductCallback,editProductCallback, toogleCompleteCallback}) => {
  return (
    <div>
      {
        products.map(product => <Product product={product} key={product.id} removeProductCallback={removeProductCallback} editProductCallback={editProductCallback} toogleCompleteCallback={toogleCompleteCallback}/> )
      }
    </div>
  )
}

export default ShoppingList
