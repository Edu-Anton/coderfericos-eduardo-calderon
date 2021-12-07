import React, {useState, createContext, useContext} from 'react';

export const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

const ProductContextProvider = ({children}) => {

  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [productExist, setProductExist] = useState(true);

  

  return (
    <ProductContext.Provider value={{
      setProducts,
      products,
      setProduct,
      product,
      productExist,
      setProductExist
    }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider