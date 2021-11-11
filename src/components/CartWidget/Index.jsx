import { useCartContext } from "../../context/CartContext"

export default function CartWidget() {

  const {quantityInCart} = useCartContext();

  return (
    <div className="rounded-pill bg-light bg-opacity-75 py-1 px-2 position-relative">
      <i className="bi bi-cart3 text-dark"></i>
      <span className="badge rounded-pill bg-secondary fw-bold d-inline-block position-absolute top-0 start-100 translate-middle">
        {quantityInCart}
      </span>
         
    </div>
  )
}
