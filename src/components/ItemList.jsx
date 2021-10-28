import Item from './Item';
import Loader from './Loader';

export default function ItemList({products, loading}) {
  return (
    <div>
      <h1 className="text-secondary">Catálogo de Productos</h1>
      <div className="row">
        {
          loading 
            ?  <Loader/>
            : (
                products.map(product => (
                  <Item
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
    </div>
  )
}
