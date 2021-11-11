import React from 'react'
import { useCartContext } from '../../context/CartContext'

export default function CartListContainer() {

  const {cartList, removeItem, clear} = useCartContext()
  console.log(cartList)

  return (
    <div className="container flex-grow-1 mt-5">
      <h1 className="fs-2 text-secondary">Productos Seleccionados</h1>
      {/* {JSON.stringify(cartList)} */}
      <div className="my-5 d-flex justify-content-end">
        <button className="btn btn-outline-success" onClick={clear}>Limpiar Carrito</button>
      </div>
      <table className="table table-success table-striped">
        <thead>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio unid.</th>
          <th>Precio Total</th>
          <th>Eliminar</th>
        </thead>
        <tbody>
          {
            cartList.map( item => (
              <tr>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.price * item.quantity}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => removeItem(item.id)}>eliminar</button>
                </td>
              </tr>
            ))
          }
          
        </tbody>  
      </table>
    </div>
  )
}
