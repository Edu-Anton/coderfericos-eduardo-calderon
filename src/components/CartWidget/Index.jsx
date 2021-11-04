export default function CartWidget() {
  return (
    <div className="rounded-pill bg-light bg-opacity-75 py-1 px-2 position-relative">
      <i class="bi bi-cart3 text-dark"></i>
      <span className="badge rounded-pill bg-secondary fw-bold d-inline-block position-absolute top-0 start-100 translate-middle">2</span>
    </div>
  )
}
