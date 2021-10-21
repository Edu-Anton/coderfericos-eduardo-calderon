import logo from '../assets/logo.png';
import CartWidget from './CartWidget';

export default function Navbar() {
  return (
    <nav className="navbar bg-success bg-gradient text-light">
      <div className="container-fluid">
        <a className="text-light text-decoration-none" href="/">
          <img className="img-fluid" src={logo} alt="logo" />
          Coderféricos
        </a>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link text-light" href="/">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="/">Categorías</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="/">
              <CartWidget/>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
