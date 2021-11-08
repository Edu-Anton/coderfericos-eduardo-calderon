import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import { getItem } from '../../services/getItem';
import ItemDetail from '../ItemDetail/Index'
import Loader from '../Loader/Index';

export default function ItemDetailContainer() {

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const {productId} = useParams()
  
  useEffect(() => {
    getItem
      .then(res => {
        setProduct(res.find(item => item.id === productId));
        // console.log('momento en el que se setea el producto');
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [productId]);

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
