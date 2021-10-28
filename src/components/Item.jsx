
export default function Item({id, title, description, price, pictureUrl}) {
  return (
    <div className="col-3">
      <div className="card mt-4 shadow">
        <div className="ratio ratio-4x3">
          <img src={pictureUrl} className="card-img-top rounded-3 border border-sucess" alt="Imagen de Producto"/>
        </div>
        <div className="card-body">
          <p className="fw-bold text-secondary">{title}</p>
          <p>{description}</p>
          <div className="d-flex justify-content-between">
            <span className="fw-bold">$ {price}</span>
            <span className="badge rounded-pill bg-success">Id: {id}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
