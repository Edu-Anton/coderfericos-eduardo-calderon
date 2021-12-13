import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import './ItemDetail.css';
import Breadcrumb from '../Breadcrumb/Index';
import ItemCount from '../ItemCount/Index';
import Button from '../Atoms/Button/Index';

export default function ItemDetail({product}) {

  const [addToCart, setAddToCart] = useState(false);
  const [counter, setCounter] = useState(1);
  const {addItem} = useCartContext();
  const {
    category_id, 
    category_name,
    id,
    brand,
    stock, 
    longDescription, 
    pictureUrl, 
    price, 
    title 
  } = product;

  const handleQuantity = () => {
    setAddToCart(true);
    addItem(product,counter)
  }

  const handleAdd = () => ( counter < stock) ? setCounter( counter+1 ) : alert('Se agotaron los productos en stock');

  const handleSubstract = () => (counter > 1 ) ? setCounter( counter-1 ) : alert('No se permite seleccionar menos de un producto');
  
  return (
    <>
    <Breadcrumb>
      <li className="breadcrumb-item">
        <Link to={`/categories/${category_id}`}>{category_name}</Link>
      </li>
      <li className="breadcrumb-item active" aria-current="page">Producto</li>
    </Breadcrumb>
    <div className="row mt-5">
      <div className="col-6 offset-3 col-md-4 offset-md-0 d-flex align-items-start">
        <div>
          <img className="img-fluid" src={`/thumbnail/${pictureUrl}1x1-min.jpg`} alt={title}/>
        </div>
      </div>
      <div className="col-12 col-md-8">
        <div className="car">
          <div className="card-body px-3 pt-0">
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="text-secondary fw-normal">
                {title} 
              </h2>
              <div>
                <span className="text-muted">(cod: {id.substring(0,6)})</span>
                <i className="bi bi-share mx-3"></i>
              </div>
            </div>
            <span className="fw-bold text-main d-inline-block my-1 fv-small-caps"> Marca: {brand}</span>
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
              <span className="text-main fw-bold">Disponible: </span>
              <span>{stock} unidades</span>
            </p>
            <hr />
            {
              addToCart
              ? (
                  <Link to="/cart"> 
                    <Button>
                      <i className="bi bi-cart3 me-2"></i>
                      Ir al carrito
                    </Button>
                  </Link>
                )
              : (
                  <div className="d-flex align-items-center mt-3">
                    <ItemCount 
                      stock={stock} 
                      quantity={counter} 
                      handleAdd={handleAdd} 
                      handleSubstract={handleSubstract}
                    />
                    <Button variant="ms-3" onClick={handleQuantity}>Añadir al carrito</Button>
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
