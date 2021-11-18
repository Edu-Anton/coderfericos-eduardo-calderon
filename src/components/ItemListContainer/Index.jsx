import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
// import {getFetch} from '../../services/getFetch';
import { getFirestore } from '../../services/getFirestore';
import ItemList from "../ItemList/Index";
// import ItemCount from "./ItemCount/Index";

export default function ItemListContainer() {

  const [products,setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');

  const {categoryId} = useParams();

  useEffect(() => {

    if (categoryId) {
      console.log('categoryId',categoryId)
      const db = getFirestore();
      const dbQuery = db.collection('products').where('category_id', '==', parseInt(categoryId)).get()
      dbQuery
      .then(res => {
        const arrayData = res.docs.map(item => ({id:item.id, ...item.data()}))
        setProducts(arrayData);
        setTitle(categoryId === 1?'Periféricos':'Almacenamiento')
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    } else {
      const db = getFirestore();
      const dbQuery = db.collection('products').get()
      dbQuery
      .then(res => {
        const arrayData = res.docs.map(item => ({id:item.id, ...item.data()}))
        setProducts(arrayData);
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
