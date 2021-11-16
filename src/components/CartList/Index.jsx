import React from 'react'
import { useCartContext } from '../../context/CartContext'
import CartItem from '../CartItem/Index';


export default function CartList() {

  const {cartList} = useCartContext();

  return (
    <div>
      
      {
        cartList.map( (product, index) => (
          <CartItem key={index} product={product} index={index}/>
        ))
      }
    </div>
  )
}
