import React, { useState, createContext, useContext } from 'react';

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({children}) => {
  
  const [cartList, setCartList] = useState([]);
  const [quantityInCart, setQuantityInCart] = useState(0); 
  
  const isInCart = (itemId) => {
    return cartList.some(item => item.id === itemId);
  }

  const addItem = (product, quantity) => {

    if ( isInCart(product.id) ) {
      const filteredCartList = cartList.filter(item => item.id !== product.id);
      const cartItem = cartList.find(item => item.id === product.id);
      quantity = quantity + cartItem.quantity;
      setCartList([
        ...filteredCartList,
        {...product, quantity}
      ]);
      console.log('ya existe el producto');
    } else {
      setCartList([
        ...cartList,
        {...product, quantity}
      ]);
      setQuantityInCart(quantityInCart + 1);
      console.log(`Se han añadido ${quantity} productos ${product.title} al carrito`); 
    }
  }

  const removeItem = itemId => {
    setCartList(
      cartList.filter(item => item.id !== itemId)
    )
    setQuantityInCart(quantityInCart -1);
    alert(`el elemento con ID ${itemId} ha sido removido`)
  }

  const clear = () =>{
    setCartList([]);
    setQuantityInCart(0);
  }

  return (
    <CartContext.Provider value={{
      cartList,
      addItem,
      removeItem,
      quantityInCart,
      clear
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
