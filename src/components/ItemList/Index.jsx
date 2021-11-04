import Item from '../Item/Index';
import Loader from '../Loader/Index';

export default function ItemList({products, loading}) {
  return (
    <div className="row">
      {
        loading 
          ?  <Loader/>
          : (
              products.map(product => (
                <Item
                  key={product.id}
                  id={product.id} 
                  description={product.description}
                  pictureUrl={`/thumbnail/${product.pictureUrl}.jpg`}
                  price={product.price}
                  title={product.title}
                />
              ))
            )
      }
    </div>
    
  )
}
