import React from 'react'
import { useCartContext } from '../../context/CartContext'

import ItemCount from '../ItemCount/Index';

export default function CartItem({product, index}) {

  const {
    removeItem, 
    addUnit, 
    subtractUnit
  } = useCartContext();
  
  const handleSubtract = () => {
    if (product.quantity > 1 ) {
      subtractUnit(product.quantity, index);
    }  else {
      alert('No se permite seleccionar menos de un producto');
    }
  }

  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="row">
          <div className="col-2">
            <img src={`/thumbnail/${product.pictureUrl}1x1_sm.jpg`} alt="" className="img-fluid"/>
          </div>
          <div className="col-4">
            <div className="h-100 d-flex flex-column justify-content-between">
              <div>
                <h3 className="fs-6 text-uppercase">{product.title}</h3>
                <p><span className="fv-small-caps">Código:</span> {product.id.substring(0,4)}</p>
              </div>
              {/* <span className="text-decoration-underline fs-sm-1" onClick={()=>removeItem(product.id, product.quantity)}>Eliminar</span> */}
              <span className="text-decoration-underline fs-sm-1 cursor-pointer" onClick={()=>removeItem(product.id, product.quantity)}>Eliminar</span>
            </div>
          </div>
          <div className="col-6">
            <div className="h-100 d-flex flex-column justify-content-between">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="fs-5 mb-0 text-danger">$ {product.price} (Oferta)</p>
                  <p className="text-muted">$ {product.price}</p>
                </div>
                <ItemCount
                  stock={5} 
                  quantity={product.quantity} 
                  handleAdd={()=>addUnit(product.quantity, index)} 
                  // handleSubstract={()=>subtractUnit(product.quantity, index)}
                  handleSubstract={handleSubtract}
                />
              </div>
              <div className="d-flex justify-content-between fs-sm-1">
                <span>
                  <i className="bi bi-truck fs-6 text-main me-2"></i>
                  Despacho a domicilio
                </span>
                <span className="text-main fw-bold fv-small-caps">Disponible</span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
