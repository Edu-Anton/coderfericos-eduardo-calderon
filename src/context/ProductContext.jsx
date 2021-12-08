import React, {useState, createContext, useContext} from 'react';

export const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

const ProductContextProvider = ({children}) => {

  const [products, setProducts] = useState([]);

  return (
    <ProductContext.Provider value={{
      setProducts,
      products
    }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider