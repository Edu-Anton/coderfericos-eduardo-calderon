import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import './ItemDetail.css';

import Breadcrumb from '../Breadcrumb/Index';
import ItemCount from '../ItemCount/Index';

export default function ItemDetail({product}) {

  const [addToCart, setAddToCart] = useState(false);
  const [counter, setCounter] = useState(1);

  const {addItem} = useCartContext();
  const {id, title, longDescription, price, pictureUrl, category_id, category_name} = product;
  const stock = 5;

  const handleQuantity = () => {
    setAddToCart(true);
    addItem(product,counter)
  }

  const handleAdd = () => ( counter < stock) ? setCounter( counter+1 ) : alert('Se agotaron los productos en stock');

  const handleSubstract = () => (counter > 1 ) ? setCounter( counter-1 ) : alert('No se permite seleccionar menos de un producto');
  
  return (
    <>
    <Breadcrumb category_id={category_id} category_name={category_name}/>
    <div className="row mt-5">
      <div className="col-6 offset-3 col-md-4 offset-md-0 d-flex align-items-start">
        <div>
          <img className="img-fluid" src={`/thumbnail/${pictureUrl}1x1.jpg`} alt={title}/>
        </div>
      </div>
      <div className="col-12 col-md-8">
        <div className="car">
          <div className="card-body px-3 pt-0">
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="fs-3 text-secondary fw-light">{title}</h2>
              <i className="bi bi-share me-3"></i>
            </div>
            <span className="fw-light text-secondary d-inline-block my-1 fv-small-caps"> Código: {id}</span>
            <h6><span className="badge bg-red p-3 py-2 mt-2">20% Dsto</span></h6>
            <p className="fs-4 text-danger">
              $ {price} 
              <span className="fs-5 fw-ligth text-muted text-decoration-line-through d-inline-block mx-3">$ {(120*price)/100}</span>
            </p>
            <hr />
            <div>{longDescription}</div>
            <hr />
            <p className="font-monospace text-secondary">
              <i className="fs-5 bi bi-shield-check text-info me-2"></i> Un año de garantía
            </p>
            <p className="font-monospace text-secondary">
              <i className="fs-5 bi bi-arrow-repeat text-info me-2"></i> Política de devolución de 30 días
            </p>
            <p className="font-monospace text-secondary">
              <i className="fs-5 bi bi-truck text-info me-2"></i> Envío a domicilio
            </p>
            <p>
              <i className="bi bi-star me-1 text-warning"></i>
              <i className="bi bi-star me-1 text-warning"></i>
              <i className="bi bi-star me-1 text-warning"></i>
              <i className="bi bi-star me-1 text-warning"></i>
              <i className="bi bi-star me-1 text-warning"></i>
              <span className="text-secondary ms-2 fv-small-caps">Califica el producto</span>
            </p>
            <hr />
            {
              addToCart
              ? (
                  <Link to="/cart" className="btn go_to_cart py-3 px-4"> 
                    <i className="bi bi-cart3 me-2"></i>
                    Ir al carrito
                  </Link>
                )
              // : <ItemCount stock={5} initial={1} onAdd={handleClick}/>
              : (
                  <div className="d-flex align-items-center mt-3">
                    <ItemCount 
                      stock={stock} 
                      quantity={counter} 
                      handleAdd={handleAdd} 
                      handleSubstract={handleSubstract}
                    />
                    <button 
                      className="btn counter__on-add-btn ms-3" 
                      onClick={handleQuantity}
                    >
                      Añadir al carrito
                    </button>
                  </div>
                ) 
            }       
            <hr />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
