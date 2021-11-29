import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

const CheckoutSumary = () => {
  
  const {getTotalAccount} = useCartContext()
  
  const location = useLocation();
  console.log(location)

  return (
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
        {/* <span className="fs-sm-1">
          <i className="bi bi-info-square me-1"></i>
          Su pedido llegará en 5 días a partir de la fecha de su compra.
        </span> */}
        {/* <button className="btn bg-red text-light my-4 w-100 py-3" onClick={()=>postOrder()}>Terminar mi compra</button> */}
        {
          location.pathname === '/cart'
          ? <Link className="btn bg-red text-light my-4 py-3 d-block" to='/checkout'>Confirmar mi compra</Link>
          : (
            <>
              <Link to="/cart">Ver detalle de mi compra</Link>
              <div className="alert alert-success fs-sm-1 mt-4" role="alert">
                <i className="bi bi-info-square me-1"></i>
                Su pedido llegará en 5 días a partir de la fecha de su compra.
              </div>
            </>
          )
          // : <Link className="btn bg-red text-light my-4 py-3 d-block" to='/cart'>Ver detalle de mi compra2</Link>
        }
        {/* <button className="btn bg-red text-light my-4 w-100 py-3">Terminar mi compra</button> */}
        
        

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
  )
}

export default CheckoutSumary
