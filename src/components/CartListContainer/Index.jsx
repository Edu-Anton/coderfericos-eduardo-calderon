import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'
import 'firebase/firestore';
import CartList from '../CartList/Index'
import './CartListContainer.css';
import CheckoutSumary from '../CheckoutSumary/Index';

export default function CartListContainer() {

  const {
    quantityInCart,  
    removeItems
  } = useCartContext()

  return (
    <div className="row">
      <div className="col-8">
      { quantityInCart !== 0 && (
        <div className="card mb-3">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start">
              <h2 className="h3 mb-0 fw-light">
                Bolsa de Compra 
                <span className="t"> ({quantityInCart} productos)</span>
              </h2>
              <button className="btn btn-outline-secondary btn-sm" onClick={removeItems}>Limpiar Carrito</button>
            </div>
          </div>
        </div>
      )}
        {
        !quantityInCart
        ? (
            <div className="text-center mt-5">
              {/* <i className="bi bi-cart3"></i> */}
              <img className="mb-4" src="./thumbnail/cartEmpty.png" alt="carrito vacio" />
              <p className="h4 fw-light">Tu carrito de compras está vacío</p>
              <p className="h4 fw-light">Agrega productos ahora</p>
              <Link className="btn bg-red text-light py-3 px-4 mt-3" to="/">Seguir Comprando</Link>
            </div>
          )
        : (
            <div>
              <CartList/>
            </div>
          )
        }
      </div>
      {
        quantityInCart && (
          <div className="col-4">
            <CheckoutSumary/>
          </div>
        )
      }
      
    </div>
  )
}
