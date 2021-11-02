import React, {useState, useEffect} from 'react'
import { getItem } from '../services/getItem';
import ItemDetail from './ItemDetail'
import Loader from './Loader';

export default function ItemDetailContainer() {

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const handleClick = (total) => {
    alert(`Se han comprado ${total} productos`);
  }

  useEffect(() => {
    getItem
      .then(res => setProduct(res))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="fs-2 text-secondary">Item Detail Container</h1>
      {
        loading 
          ? <Loader/>
          : <ItemDetail product={product} onAdd={handleClick}/>  
      }
      
    </div>
  )
}
