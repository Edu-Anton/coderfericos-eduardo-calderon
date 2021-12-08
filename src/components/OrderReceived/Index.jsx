import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router';
import { getFirestore } from '../../services/getFirestore';
import Loader from '../Loader/Index';
import './OrderReceived.css';

const OrderReceived = () => {
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(true);
  const {orderId} = useParams();

  useEffect(() => {
    const db = getFirestore();
    const dbQuery = db.collection('orders').doc(orderId).get()
    dbQuery
    .then(res => setOrder({id:res.id, ...res.data()}))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  }, [orderId])

  return (
    <div className="container flex-grow-1 mb-5">
      <div className="row">
      {
      loading 
        ? <Loader/>
        : (
            <div className="col-8">
              <h2 className="fs-2 fw-lght mb-5 text-main">¡Gracias! Tu orden ha sido recibida</h2>
              <ul className="list-group">   
                <li className="list-group-item bg-grey">
                  <p className="mb-1 order__label text-main fw-bold">ID ORDEN</p>
                  <p className="mb-0 order__info">{order.id}</p>
                </li>
                <li className="list-group-item bg-grey">
                  <p className="mb-1 order__label text-main fw-bold">CLIENTE</p>
                  <p className="mb-0 order__info">{order.buyer.name}</p>
                </li>
                <li className="list-group-item bg-grey">
                  <p className="mb-1 order__label text-main fw-bold">EMAIL</p>
                  <p className="mb-0 order__info">{order.buyer.email}</p>
                </li>
                <li className="list-group-item bg-grey">
                  <p className="mb-1 order__label text-main fw-bold">MÉTODO DE PAGO</p>
                  <p className="mb-0 order__info">Tarjeta Visa 4343-xxxx-xxxx-2323</p>
                </li>
                <li className="list-group-item bg-grey">
                  <p className="mb-1 order__label text-main fw-bold">MONTO DE COMPRA</p>
                  <p className="mb-0 order__info">USD ${order.total + 10} </p>
                </li>
              </ul> 

                <h2 className="fs-4 text-secondary fw-light mt-5">Detalle de la Orden</h2>
                <table className="table table-borderLess mt-4">
                  <thead>
                    <tr>
                      <th className="text-main">Producto</th>
                      <th className="text-main">Marca</th>
                      <th className="text-main">Cantidad</th>
                      <th className="text-main">Precio Unitario</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                    order.items.map((item, index) => (
                      <tr  key={index}>
                        <td className="py-3">{item.title}</td>
                        <td className="py-3">{item.brand}</td>
                        <td className="py-3" align="center">{item.quantity}</td>
                        <td className="py-3" align="right">$ {item.price}</td>
                      </tr>
                    ))
                    }
                    <tr>
                      <td className="py-3" colSpan="3">Costo de Envío</td>
                      <td className="py-3" align="right">$ 10</td>
                    </tr>
                  </tbody>
                </table>
            </div>
          ) 
      }
      </div>
    </div>
  )
}

export default OrderReceived
