import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import {getFetch} from '../../services/getFetch';
import ItemList from "../ItemList/Index";
// import ItemCount from "./ItemCount/Index";

export default function ItemListContainer() {

  const [products,setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');

  const {categoryId} = useParams();

  useEffect(() => {

    if (categoryId) {
      getFetch
      .then(res => {
        const products = res.filter(item => item.category.id === categoryId);
        setProducts(products);
        setTitle(products[0].category.name);
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    } else {
      getFetch
      .then(res => {
        setProducts(res)
        setTitle('Catálogo de Productos');
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    }
  }, [categoryId]); 

  // const handleClick = (total) => {
  //   alert(`Se han comprado ${total} productos`);
  // }

  return (
    <div className="container flex-grow-1 mt-5">
      <h1 className="fs-3 text-secondary">{title}</h1>
      <ItemList products={products} loading={loading}/>
    </div>
  )
}
