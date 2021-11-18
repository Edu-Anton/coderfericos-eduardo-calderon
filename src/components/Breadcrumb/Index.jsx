import React from 'react'
import {Link} from 'react-router-dom';

export default function Breadcrumb({category_id, category_name}) {
  return (
    <div className="bg-light py-2">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
          <li className="breadcrumb-item"><Link to={`/categories/${category_id}`}>{category_name}</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Producto</li>
        </ol>
      </nav>
    </div>
  )
}
