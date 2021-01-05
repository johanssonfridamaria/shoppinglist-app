import React, { useState } from 'react'
import ProductName from './ProductName'
import ProductEdit from './ProductEdit'

const Product = ({ product, removeProductCallback, editProductCallback, toogleCompleteCallback }) => {

  const [edit, setEdit] = useState(false)

  const toggleEdit = () => {
    setEdit(!edit)
  }


  return (
    <div className="product">
      <div className="product-name">
        <button className={`btn-product ${product.completed ? "btn-done" : "btn-not-done"}`} onClick={() => toogleCompleteCallback(product.id)}><i className="fas fa-check"></i></button>
        {edit
          ? <ProductEdit product={product} setEdit={setEdit} editProductCallback={editProductCallback} />
          : <ProductName product={product} />
        }
      </div>
      {
        edit
          ? ''
          : <div className="buttons">
            <button className="btn-product btn-edit" onClick={toggleEdit}><i className="fas fa-pen"></i></button>
            <button className="btn-product btn-delete" onClick={() => removeProductCallback(product.id)}><i className="fas fa-minus"></i></button>
          </div>
      }
    </div>
  )
}

export default Product
