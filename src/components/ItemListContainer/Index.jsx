import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import { useProductContext } from '../../context/ProductContext';
import { getFirestore } from '../../services/getFirestore';
import ItemList from "../ItemList/Index";

export default function ItemListContainer() {

  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('Listado de Productos');
  const [grid, setGrid] = useState(true);
  const {products, setProducts} = useProductContext();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const {categoryId} = useParams();

  useEffect(() => {
    const db = getFirestore().collection('products');
    if (categoryId) {
      const dbQuery = db.where('category_id', '==', parseInt(categoryId)).get()
      dbQuery
      .then(res => {
        const arrayData = res.docs.map(item => ({id:item.id, ...item.data()}))
        setProducts(arrayData);
        setTitle(arrayData[0].category_name)
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    } else {
      const dbQuery = db.get()
      dbQuery
      .then(res => {
        const arrayData = res.docs.map(item => ({id:item.id, ...item.data()}))
        setProducts(arrayData);
        setTitle('Todos los productos');
        setSelectedBrands([]);
        setFilteredProducts([]);
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    }
  }, [categoryId, setProducts]); 

  useEffect(() => {
    const getUniqueValues = () => {
      const myArray = products.map(item => item.brand);
      let unique = [...new Set(myArray)]; 
      setBrands(unique);
    }
    getUniqueValues()
  }, [products])

  useEffect(() => {
    setSelectedBrands([]);
    setFilteredProducts([]);
  }, [categoryId])

  const getListProducts = () => {
    if(filteredProducts.length === 0) {
      return products
    }
    return filteredProducts
  }

  const handleGrid = (value) => {
    setGrid(value)
  }

  const handlerAddFilteredBrand = (brand) => {
    !isBrandSelected(brand) && filteredByBrand(brand);
  }

  const isBrandSelected = (brand) => {
    return selectedBrands.some(item => item === brand)
  }

  const filteredByBrand = (brand) => {
    // const filteredProducts = (brand) => {
    //   products.filter(item => item.brand === brand)
    // }
    // setProducts(...filteredProducts);
    const newFilteredProducts = products.filter(item => item.brand === brand);
    // console.log('filtered Products',newFilteredProducts)
    setFilteredProducts([
      ...filteredProducts,
      ...newFilteredProducts
    ]);
    // console.log(filteredProducts)
    // setFilteredProducts(() => products.filter(item => item.brand === brand))
    // const newSelectedBrand = selectedBrands.push(brand);
    setSelectedBrands(
      [...selectedBrands, brand]
    );
    // console.log('selected brands', selectedBrands)
  }

  const handlerRemoveFilteredBrand = (brand, index) => {
    setFilteredProducts(filteredProducts.filter(product => product.brand !== brand));
    console.log(index);
    const newSelectedBrands = [...selectedBrands];
    newSelectedBrands.splice(index,1);
    // [...selectedBrands].splice(index,1);
    // console.log('newSelectedBrands',newSelectedBrands);
    setSelectedBrands([...newSelectedBrands])
    // setSelectedBrands([...selectedBrands])
  }

  const handlerRemoveAllFilteredProducts = () => {
    setSelectedBrands([]);
    setFilteredProducts([]);
  }

  return (
    <>
      <div className="row">
        <div className="col-3">
        <h1 className="fs-5 text-secondary mb-4">{title}</h1> 
        <ul className="list-group list-group-flush">
          {/* <li className="list-group-item">
            <span className="fs-5 fw- text-secondary">{title}</span>
          </li> */}
          {
            brands.map((brand, index )=> (
              <li className="list-group-item" key={index}>
                <div className="text-secondary fv-small-caps" onClick={() => handlerAddFilteredBrand(brand)}>{brand}</div>
                {/* <span className="fv-small-caps" onClick={() => handlerAddFilteredBrand(brand)}>{brand}</span> */}
              </li>
            ))
          }
          {/* <li className="list-group-item">
            <NavLink to="/">Todos</NavLink>
          </li>
          <li className="list-group-item">
            <NavLink to="/categories/1">Periféricos</NavLink>
          </li>
          <li className="list-group-item">
            <NavLink to="/categories/2">Almacenamiento</NavLink>
          </li> */}
        </ul>
        {/* <h2 className="fs-3 mt-4">Filtros</h2> */}

        {
          selectedBrands.length !== 0 && (
            <ul className="list-group list-group-flush mt-4 ">
              <li className="list-group-item">
                <div className="d-flex justify-content-between align-content-center">

                <span className="fs-5 fw- text-secondary">Filtros</span>
                  <i className="bi bi-x-square" onClick={handlerRemoveAllFilteredProducts}></i>
                </div>
              </li>
              <li className="list-group-item">
              { 
                selectedBrands.map((brand, index) => (
                  <span className="badge bg-grey text-dark me-2 mb-2" key={index}>
                    <span className="text-secondary me-2">{brand}</span>
                    <i class="bi bi-x-square" onClick={()=>handlerRemoveFilteredBrand(brand, index)}></i>
                    {/* <span className="bg-light rounded-circle px-1 ms-1" onClick={()=>handlerRemoveFilteredBrand(brand, index)}>X</span> */}
                  </span>
                ))
              }
              </li>
            </ul>
          )
        }

        

        

          {/* <div className="card">
            <div className="card-header">
              Categorías
            </div>
            <div className="card-body">

            <ul className="list-group list-group-flush">
              <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
              <li className="list-group-item">A fourth item</li>
              <li className="list-group-item">And a fifth one</li>
            </ul>


            </div>
          </div> */}
        </div>
        <div className="col-9">
          <div className="bordr d-flex justify-content-end align-items-center">
            <div>

            </div>
            <i className={`bi bi-grid me-2 px-1 ${grid && 'bg-main text-light'}`} onClick={() => handleGrid(true)}></i>
            <i className={`bi bi-view-stacked me-2 px-1 ${!grid && 'bg-main text-light'}`} onClick={() => handleGrid(false)}></i>
          </div>
          <ItemList products={getListProducts()} loading={loading} grid={grid}/>
        </div>
      </div>
    </>
  )
}
