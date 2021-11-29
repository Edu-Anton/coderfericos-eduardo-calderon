import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'
import { getFirestore } from '../../services/getFirestore';
import firebase from 'firebase';
import 'firebase/firestore';
import CheckoutSumary from '../CheckoutSumary/Index';
import Nmodal from '../Nmodal/Index'

const Checkout = () => {
  const [formData, setFormData] = useState({name:'Eduardo Calderón', email: 'ed@gmail.com', phone:'967678555'})
  const [openModal, setOpenModal] = useState(false);

  const {cartList, getTotalAccount, removeItems} = useCartContext()

  const history = useHistory();

  const postOrder = () => {
    const order = {};
    order.date = firebase.firestore.Timestamp.fromDate(new Date());
    order.buyer = {name: formData.name, phone: formData.phone, email: formData.email};
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
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  console.log(formData)

  const handleOpenModal = (e) => {
    e.preventDefault();
    setOpenModal(true);
  }

  const handleCloseModal = () => {
    setOpenModal(false);
  }

  return (
    <div className="container mt-5 flex-grow-1">
      <div className="row">
        <div className="col-8">

          <div className="card mb-3">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start">
                <h2 className="h3 mb-0 fw-light">
                  Registro de Comprador 
                  {/* <span className="t"> ({quantityInCart} productos)</span> */}
                </h2>
                {/* <button className="btn btn-outline-secondary btn-sm" onClick={removeItems}>Limpiar Carrito</button> */}
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <form onChange={handleChange}>
                <div className="mb-3 row">
                  <label for="inputPassword" className="col-sm-3 col-form-label">Nombre</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" id="inputPassword" name="name" value={formData.name}/>
                  </div>
                </div>
                <div className="mb-3 row">
                  <label for="inputPassword" className="col-sm-3 col-form-label">Email</label>
                  <div className="col-sm-9">
                    <input type="email" className="form-control" id="inputPassword" name="email" value={formData.email}/>
                  </div>
                </div>
                <div className="mb-3 row">
                  <label for="inputPassword" className="col-sm-3 col-form-label">Teléfono</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" id="inputPassword" name="phone" value={formData.phone}/>
                  </div>
                </div>
                <div className="text-center">
                  <button className="btn bg-red text-light my-4 py-3 px-5" onClick={(e) => handleOpenModal(e)}>
                    Continuar con el pago <i className="bi bi-arrow-right"></i> 
                  </button>
                </div>
              </form>
            </div>

          </div>
          
        { openModal && <Nmodal handleCloseModal={handleCloseModal} postOrder={postOrder}/>}

        </div>
        <div className="col-4">
          <CheckoutSumary/>
        </div>
      </div>
    </div>
  )
}

export default Checkout
