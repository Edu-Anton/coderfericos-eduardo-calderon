import React, {useState} from 'react'
import { useCartContext } from '../../context/CartContext';
import './ItemCount.css';

export default function ItemCount({stock, initial, product, addToCart}) {
  const [counter, setCounter] = useState(initial);

  const {addItem} = useCartContext();

  const onAdd = () => {
    addItem(product, counter);
    addToCart();
  }

  const handleAdd = () => ( counter < stock) ? setCounter( counter+1 ) : alert('Se agotaron los productos en stock');

  const handleSubstract = () => (counter > 1 ) ? setCounter( counter-1 ) : alert('No se permite seleccionar menos de un producto');

  return (
    <div className="d-flex mt-3">
          <div className="numeric-stepper__container mx-4">
            <button className="numeric-stepper__btn" onClick={handleSubstract} disabled={counter < 1}>-</button>
            {/* <span className="d-inline-block m-3 fw-bold">{counter}</span> */}
            <input className="numeric-stepper__input mx-3" type="text" value={counter}/>
            <button className="numeric-stepper__btn" onClick={handleAdd} disabled={counter > stock}>+</button>
          </div>
          <button 
            className="btn counter__on-add-btn" 
            onClick={onAdd}
          >
            Añadir al carrito
          </button>
    </div>
  )
}
