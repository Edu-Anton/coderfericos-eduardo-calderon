import cartIcon from '../assets/cartIcon.png';

export default function CartWidget() {
  return (
    <div className="rounded-pill bg-primary bg-opacity-75 p-1 position-relative">
      <img className="w-75 mr-2" src={cartIcon} alt="cart-icon" />
      <span className="badge rounded-pill bg-secondary fw-bold d-inline-block position-absolute top-0 start-100 translate-middle">2</span>
    </div>
  )
}
