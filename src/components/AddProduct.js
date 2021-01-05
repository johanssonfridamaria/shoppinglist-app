import React, {useRef} from 'react'

const AddProduct = ({addProductsCallback}) => {
  
  const productName = useRef();
  
  const addProduct = (e) => {
    e.preventDefault();

    if(productName.current.value === '')
    return
    addProductsCallback(productName.current.value)
    productName.current.value = '';
  } 
  
  
  return (
    <div className="add-product">
      <input type="text" ref={productName}/>
      <button onClick={addProduct}>Lägg till</button>
    </div>
  )
}

export default AddProduct
