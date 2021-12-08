import {Link, NavLink} from 'react-router-dom';
import './Navbar.css';

import CartWidget from '../CartWidget/Index';

export default function Navbar() {
  return (
    <div className="container-fluid bg-main py-1">
      <nav className="container text-light">
          <div className="row">
            <div className="col-3">
              <Link to="/" className="text-light text-decoration-none d-flex align-items-center">
                <i className="bi bi-keyboard fs-1 me-2 text-secondary"></i>
                <span className="fs-4">Coderféricos</span>
              </Link>
            </div>
            <div className="col-6 d-flex align-items-center">
              <div className="dropdown">
                <i className="bi bi-list border p-2 border-radius-round" data-bs-toggle="dropdown"></i>
                <span className="ms-2">Categorías</span>
                <ul className="dropdown-menu mt-2" aria-labelledby="dropdownMenu2">
                  <li>
                    <NavLink to="/categories/1" className="nav-link" activeClassName="selected">
                      <i className="bi bi-tv me-2"></i>
                      Periféricos
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/categories/2" className="nav-link" activeClassName="selected">
                      <i className="bi bi-sd-card me-2"></i> 
                      Almacenamiento
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/categories/3" className="nav-link" activeClassName="selected">
                      <i className="bi bi-speaker me-2"></i>
                      Audio y Sonido
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/categories/4" className="nav-link" activeClassName="selected">
                      <i className="bi bi-camera-video me-2"></i>
                      Video
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-3 d-flex align-items-center justify-content-end">
              <ul className="nav">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link text-light">Inicio</NavLink>
                </li>
                <li className="nav-item">
                  <Link to="/cart">
                    <CartWidget/>
                  </Link>
                </li>
              </ul>
            </div>
            

          </div>
      </nav>
    </div>
  )
}
