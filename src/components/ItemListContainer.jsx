import React, {useState, useEffect} from 'react'
import {getFetch} from '../services/getFetch';
import ItemList from "./ItemList";
import ItemCount from "./ItemCount";

export default function ItemListContainer() {

  const [products,setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFetch
      .then(res => setProducts(res))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, []); 

  const handleClick = (total) => {
    alert(`Se han comprado ${total} productos`);
  }

  return (
    <div className="container pt-5">
      <ItemList products={products} loading={loading}/>
      <ItemCount stock={5} initial={1} onAdd={handleClick}/>
    </div>
  )
}
