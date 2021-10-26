import ItemCount from "./ItemCount";


export default function ItemListContainer({greeting}) {
  return (
    <div className="container pt-5">
      <ItemCount stock={5} initial={1}/>
    </div>
  )
}
