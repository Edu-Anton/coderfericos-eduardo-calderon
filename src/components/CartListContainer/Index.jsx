import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'
import { getFirestore } from '../../services/getFirestore';
import firebase from 'firebase';
import 'firebase/firestore';
import CartList from '../CartList/Index'
import './CartListContainer.css';
import CheckoutSumary from '../CheckoutSumary/Index';

export default function CartListContainer() {

  const {cartList, quantityInCart, getTotalAccount, removeItems} = useCartContext()

  const history = useHistory();
  const location = useLocation();

  console.log('location', location.pathname);

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
              <CheckoutSumary/>
            </div>
          )
        }
        
      </div>
    </div>


  )
}
