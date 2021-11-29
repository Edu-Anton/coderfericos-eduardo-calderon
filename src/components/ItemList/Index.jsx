import Item from '../Item/Index';
import Loader from '../Loader/Index';

export default function ItemList({products, loading}) {
  return (
    <div className="row">
      {
        loading 
          ? <Loader/>
          : products.map(product => <Item key={product.id} product={product}/>)
      }
    </div>
    
  )
}
