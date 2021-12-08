import React, { useState, createContext, useContext } from 'react';

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({children}) => {
  
  const [cartList, setCartList] = useState([]);
  const [quantityInCart, setQuantityInCart] = useState(0); 
  
  const isInCart = (itemId) => cartList.some(item => item.id === itemId)

  const getTotalAccount = () => cartList.reduce((acum, product) => (acum + product.price*product.quantity), 0);

  const addItem = (product, quantity) => {

    if ( isInCart(product.id) ) {
      const filteredCartList = cartList.filter(item => item.id !== product.id);
      const cartItem = cartList.find(item => item.id === product.id);
      const newQuantity = quantity + cartItem.quantity;
      setCartList([
        ...filteredCartList,
        {...product, quantity: newQuantity}
      ]);
    } else {
      setCartList([
        ...cartList,
        {...product, quantity}
      ]);
    }
    setQuantityInCart(quantityInCart + quantity);
  }

  const removeItem = (itemId, quantity) => {
    setCartList(cartList.filter(item => item.id !== itemId))
    setQuantityInCart(quantityInCart - quantity);
  }

  const removeItems = () =>{
    setCartList([]);
    setQuantityInCart(0);
  }

  const addUnit = (oldQuantity, index) => {
    const newCartList = [...cartList];
    newCartList[index].quantity = oldQuantity + 1;
    setCartList(newCartList);
    setQuantityInCart(quantityInCart +1);
  }

  const subtractUnit = (oldQuantity, index) => {
    const newCartList = [...cartList];
    newCartList[index].quantity = oldQuantity - 1;
    setCartList(newCartList);
    setQuantityInCart(quantityInCart -1);
  }

  return (
    <CartContext.Provider value={{
      cartList,
      addItem,
      removeItem,
      quantityInCart,
      getTotalAccount,
      removeItems,
      addUnit,
      subtractUnit
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
