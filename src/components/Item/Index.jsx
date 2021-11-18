import {Link} from 'react-router-dom'

export default function Item({id, title, description, price, pictureUrl}) {
  return (
    <div className="col-6 col-lg-4 col-xl-3">
      <Link to={`/products/${id}`} className="text-decoration-none text-secondary">
        <div className="card mt-4 shadow-sm">
          <div className="ratio ratio-4x3">
            <img src={pictureUrl} className="card-img-top rounded-3 border border-sucess" alt="Imagen de Producto"/>
          </div>
          <div className="card-body">
            <p className="fw-bold text-secondary">{title}</p>
            <p>{description}</p>
            <div className="d-flex justify-content-between">
              <span className="fw-bold">$ {price}</span>
              <span className="badge rounded-pill bg-main">Id: {id.substring(0,2)}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
