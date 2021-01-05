import React, {useRef, useEffect} from 'react'

const ProductEdit = ({product, setEdit, editProductCallback}) => {

  const input = useRef(); 

  useEffect(()=>{
    input.current.value = product.name
  }, [product.name])

  const editProduct = (e) => {
    e.preventDefault();
    editProductCallback(product.id, input.current.value);
    setEdit(false);
  }

  return (
    <div className="edit-product">
      <input type="text" ref={input}/>
      <button className="btn-product btn-ok" onClick={editProduct}>OK</button>
    </div>
  )
}

export default ProductEdit
