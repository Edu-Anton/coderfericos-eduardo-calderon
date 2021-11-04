import {Link, NavLink} from 'react-router-dom';
import CartWidget from '../CartWidget/Index';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar bg-main text-light">
      <div className="container">
        <Link to="/" className="text-light text-decoration-none d-flex align-items-center">
          {/* <i class="bi bi-mouse2"></i> */}
          <i class="bi bi-keyboard fs-1 me-2 text-secondary"></i>
          <span className="fs-4">Coderféricos</span>
        </Link>
        <ul className="nav">
          <li className="nav-item">
            <NavLink to="/categories/1" className="nav-link text-light pe-2" activeClassName="selected">Periféricos</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/categories/2" className="nav-link text-light pe-2" activeClassName="selected">Almacenamiento</NavLink>
          </li>
        </ul>
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
    </nav>
  )
}
