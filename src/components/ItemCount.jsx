import React, {useState} from 'react'

export default function ItemCount({stock, initial, onAdd}) {
  const [counter, setCounter] = useState(initial);

  const handleAdd = () => ( counter < stock) ? setCounter( counter+1 ) : alert('Se agotaron los productos en stock');

  const handleSubstract = () => (counter > 1 ) ? setCounter( counter-1 ) : alert('No se permite seleccionar menos de un producto');

  return (
    <div className="col-12 col-md-6 col-lg-4 mt-5">
      <div className="card">
        <div className="card-header d-flex justify-content-between">
          <span>Producto A</span>
        </div>
        <div className="card-body text-center">
          <button className="btn btn-success fw-bold" onClick={handleSubstract} disabled={counter < 1}>-</button>
          <span className="d-inline-block m-3 fw-bold">{counter}</span>
          <button className="btn btn-success fw-bold" onClick={handleAdd} disabled={counter > stock}>+</button>
        </div>
        <div className="card-footer text-center">
          <button className="btn btn-outline-success" onClick={() => onAdd(counter)}>Añadir al carrito</button>
        </div>
      </div> 
    </div>
  )
}
