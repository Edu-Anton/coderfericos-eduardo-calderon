import './ItemCount.css';

export default function ItemCount({stock, quantity, handleAdd, handleSubstract}) {
  
  return (
    <div className="numeric-stepper__container">
      <button className="numeric-stepper__btn" onClick={handleSubstract} disabled={quantity < 1}>-</button>
      <div className="numeric-stepper__text mx-3">{quantity}</div>
      <button className="numeric-stepper__btn" onClick={handleAdd} disabled={quantity > stock}>+</button>
    </div>
  )
}
