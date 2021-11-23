import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'
import { getFirestore } from '../../services/getFirestore';
import firebase from 'firebase';
import 'firebase/firestore';
import CartList from '../CartList/Index'
import './CartListContainer.css';

export default function CartListContainer() {

  const {cartList, quantityInCart, getTotalAccount, removeItems} = useCartContext()

  const history = useHistory();

  const postOrder = () => {
    const order = {};
    order.date = firebase.firestore.Timestamp.fromDate(new Date());
    order.buyer = {name: 'Anton', phone: '987654321', email: 'anton@mail.com'};
    order.total = getTotalAccount();
    order.items = cartList.map(cartItem => {
      const id = cartItem.id;
      const title = cartItem.title;
      const price = cartItem.price;
      const quantity = cartItem.quantity;
      return {id, title, price, quantity}
    })
  // console.log(order)

    const db = getFirestore();
    const dbQuery = db.collection('orders').add(order)
    dbQuery
    .then(res => {
      removeItems();
      history.push(`/order-received/${res.id}`)
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="container flex-grow-1 mt-5">
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
          quantityInCart === 0
          ? (
              <div className="text-center mt-5">
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
          quantityInCart !== 0 && (
            <div className="col-4">
              <div className="card">
                <div className="card-body">
                  <h2 className="h3 fw-light mb-4">Resumen de tu orden</h2>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Sub-total productos</span>
                    <span> $ {getTotalAccount()}</span>
                  </div>
                  <div className="d-flex justify-content-between f-bold">
                    <span>Costo de Envío</span>
                    <span> $ 10</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between fw-bold mb-4">
                    <span>Precio Total</span>
                    <span> $ {getTotalAccount() + 10}</span>
                  </div>
                  <span className="fs-sm-1">
                    <i className="bi bi-info-square me-1"></i>
                    Su pedido llegará en 5 días a partir de la fecha de su compra.
                  </span>
                  <button className="btn bg-red text-light my-4 w-100 py-3" onClick={()=>postOrder()}>Terminar mi compra</button>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-column align-items-center c-benefits__content">
                      <i className="bi bi-lock fs-2 c-benefits__icon"></i>
                      <span className="text-center c-benefits__text">Pago <br/>Seguro</span>
                    </div>
                    <div className="d-flex flex-column align-items-center c-benefits__content">
                      <i className="bi bi-arrow-counterclockwise fs-2 c-benefits__icon"></i>
                      <span className="text-center c-benefits__text">Cambios y <br/>Devoluciones</span>
                    </div>
                    <div className="d-flex flex-column align-items-center c-benefits__content">
                      <i className="bi bi-emoji-smile fs-2 c-benefits__icon"></i>
                      <span className="text-center c-benefits__text">Miles de <br/>clientes felices</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          )
        }
        
      </div>
    </div>


  )
}
