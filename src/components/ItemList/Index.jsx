import Item from '../Item/Index';
// import CartItem from '../CartItem/Index';
import Loader from '../Loader/Index';

export default function ItemList({products, loading, grid}) {
  

  return (
    <div className="row">
      {
        loading 
          ? <Loader/>
          : products.map(product => <Item key={product.id} product={product} grid={grid}/>)
          // : products.map(product => <CartItem key={product.id} product={product}/>)
      }
    </div>
    
  )
}
