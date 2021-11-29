import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router';
import { getFirestore } from '../../services/getFirestore';

import Loader from '../Loader/Index';

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

  console.log('order', order);
  return (
    <div className="container flex-grow-1 mt-5">
      <div className="row">
      {
      loading 
        ? <Loader/>
        : (
            <div className="col-8">
                <h2 className="fs-1 text-secondary fw-light mb-4 mt-4">¡Gracias! Tu orden ha sido recibida</h2>
                <p className="fw-bold fs-5">Código de Orden: {order.id}</p>
                <p><b>Cliente:</b> {order.buyer.name}</p>
                <p><b>Email:</b> {order.buyer.email}</p>
                <p><b>Método de Pago:</b> Tarjeta Visa 4343-xxxx-xxxx-2323</p>
                {/* <p><b>Fecha de compra:</b> {order.date.toDate()}</p> */}

                <h2 className="fs-3 text-secondary fw-light mt-5">Detalle de la Orden</h2>
                <table className="table table-bordered table-secondary mt-4">
                  <thead>
                    <tr>
                      <th>Producto</th>
                      <th>Cantidad</th>
                      <th>Precio Unitario</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                    order.items.map((item, index) => (
                      <tr key={index}>
                        <td>{item.title}</td>
                        <td align="center">{item.quantity}</td>
                        <td align="right">$ {item.price}</td>
                      </tr>
                    ))
                    }
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="2">Costo de Envío</td>
                      <td align="right">$ 10</td>
                    </tr>
                  </tfoot>
                </table>
                <p className="mt-4"><b>Total:</b> $ {order.total + 10}</p>
            </div>
          ) 
      }
      </div>
    </div>
    
  )
}

export default OrderReceived
