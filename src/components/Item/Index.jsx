import {Link} from 'react-router-dom'
import './Item.scss';


const VerticalItem = ({product}) => {

  return (
    <div className="col-6 col-lg-4">
      <Link to={`/products/${product.id}`} className="text-decoration-none text-secondary">
        <div className="card card-shadow mt-4">
          <div className="ratio ratio-4x3">
            <img src={`/thumbnail/${product.pictureUrl}.jpg`} className="card-img-top rounded-3 border border-sucess" alt="Imagen de Producto"/>
          </div>
          <div className="card-body">
            <div className="card-title-height">
              <p className="text-dark card-product-title">{product.title}</p>
            </div>
            <p className="text-main fv-small-caps">{product.brand}</p>
            <div className="card-description-height">
              <p>{product.description}</p>
            </div>
            <div className="d-flex justify-content-between">
              <span className="fw-bold">$ {product.price}</span>
              <span className="badge rounded-pill bg-main">Id: {product.id.substring(0,2)}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

const HorizontalItem = ({product}) => {
  return (
    <div>
      {/* <div className="card mb-3" style={{'max-width': '540px'}}> */}
      <Link to={`/products/${product.id}`} className="text-decoration-none text-secondary">
      <div className="card card-shadow mt-4" >
        <div className="row g-0">
          <div className="col-md-2">
            <img src={`/thumbnail/${product.pictureUrl}1x1_sm.jpg`} className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-10">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">{product.title}</h5>
                <span className="text-main fv-small-caps fw-bold">{product.brand}</span>
              </div>
              <p className="card-text">T{product.description}</p>
              <div className="d-flex justify-content-between">
              <span className="fw-bold">$ {product.price}</span>
              <span className="badge rounded-pill bg-main">Id: {product.id.substring(0,2)}</span>
            </div>
            </div>
          </div>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default function Item({product, grid}) {
  
  return (
    <>
    {
      grid
      ? <VerticalItem product={product}/>
      : <HorizontalItem product={product}/>
    }
    {/* // <VerticalItem product={product}/> */}
    {/* // <HorizontalItem product={product}/> */}
    </>
  )
}
