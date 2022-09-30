import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router';
import { getFirestore } from '../../services/getFirestore';
import ItemDetail from '../ItemDetail/Index'
import Loader from '../Loader/Index';

import { getItemById } from '../../services/getFetch';

export default function ItemDetailContainer() {

  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({})
  const {productId} = useParams();
  const history = useHistory();

  useEffect(() => {
    const db = getFirestore();
    const dbQuery = db.collection('products').doc(productId).get()
    // console.log(getItemById(productId));
    const producRx = getItemById(productId);
    dbQuery
    // .then(res => setProduct({id:res.id, ...res.data()}))
    .then(res => setProduct(producRx))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  }, [productId,setProduct, history])

  return (
    <>
      {
        loading 
          ? <Loader/>
          : <ItemDetail product={product}/>  
      }
    </>
  )
}
