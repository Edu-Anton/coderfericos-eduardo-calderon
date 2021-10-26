import React, {useState} from 'react'

export default function ItemCount({stock, initial}) {
  const [counter, setCounter] = useState(initial);
  const [balance, setBalance] = useState(stock);

  const handleAdd = () => {
    if ( balance === 0) {
      alert('Se agotaron los productos en stock')
      return
    }
    setCounter( counter+1 );
    setBalance( balance-1 );
  };

  const handleSubstract = () => {
    if (counter === 1 ) {
      alert('No se permite seleccionar menos de un producto');
      return
    }
    setCounter( counter-1 );
    setBalance( balance+1 );
  };

  const onAdd = () => {
    alert(`Se han comprado ${counter} productos`);
  }

  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card">
        <div className="card-header d-flex justify-content-between">
          <span>Producto A</span>
          <span>En stock: {balance}</span>
        </div>
        <div className="card-body text-center">
          <button className="btn btn-success fw-bold" onClick={handleSubstract}>-</button>
          <span className="d-inline-block m-3 fw-bold">{counter}</span>
          <button className="btn btn-success fw-bold" onClick={handleAdd}>+</button>
        </div>
        <div className="card-footer text-center">
          <button className="btn btn-outline-success" onClick={onAdd}>Añadir al carrito</button>
        </div>
      </div> 
    </div>
  )
}
