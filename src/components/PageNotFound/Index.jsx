import React from 'react';
import {Link} from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="container mt-5 flex-grow-1 d-flex justify-content-center align-items-center">
      <img className="img-fluid w-50" src="./page_not_found.jpg" alt="Página no encontrada" />
      <Link to="https://www.freepik.es/vectores/web">Vector de Web creado por stories - www.freepik.es</Link>
    </div>
  )
}

export default PageNotFound
