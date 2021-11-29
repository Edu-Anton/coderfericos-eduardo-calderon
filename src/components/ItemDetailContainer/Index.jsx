import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router';
import { getFirestore } from '../../services/getFirestore';
import ItemDetail from '../ItemDetail/Index'
import Loader from '../Loader/Index';

export default function ItemDetailContainer() {

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const {productId} = useParams()
  const history = useHistory();

  useEffect(() => {
    const db = getFirestore();
    const dbQuery = db.collection('products').doc(productId).get()
    dbQuery
    .then(res => {
      if (!res.exists){return history.push('/')}
      setProduct({id:res.id, ...res.data()})
    })
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  }, [productId, history])

  return (
    <div className="container mt-5 flex-grow-1">
      {/* <h1 className="fs-2 text-secondary">Item Detail Container</h1> */}
      {
        loading 
          ? <Loader/>
          : <ItemDetail product={product}/>  
      }
      
    </div>
  )
}
