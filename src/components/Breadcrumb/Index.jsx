import React from 'react'
import {Link} from 'react-router-dom';

export default function Breadcrumb({children}) {
  return (
    <div className="bg-light py-2">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>

          {children}

          
        </ol>
      </nav>
    </div>
  )
}
