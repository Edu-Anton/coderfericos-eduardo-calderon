import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import ItemDetailContainer from './components/ItemDetailContainer/Index';
import ItemListContainer from './components/ItemListContainer/Index';
import Navbar from './components/Navbar/Index';
import Footer from './components/Footer/Index';
import CartListContainer from './components/CartListContainer/Index';

import OrderReceived from './components/OrderReceived/Index';
import Checkout from './components/Checkout/Index';
import { useCartContext } from './context/CartContext';
import PageNotFound from './components/PageNotFound/Index';
import { useProductContext } from './context/ProductContext';


function App() {
  const {quantityInCart} = useCartContext();
  const {products} = useProductContext();

  return (
    <div className="App min-vh-100 d-flex flex-column">
      <BrowserRouter>
        <Navbar/>
        <div className="container flex-grow-1 py-5">
          <Switch>
            <Route exact path="/" component={ItemListContainer}/>
            <Route exact path="/categories/:categoryId">
              {products.length ? <ItemListContainer/> : <Redirect to="/"/>}
            </Route>
            <Route exact path="/products/:productId" component={ItemDetailContainer}/> <Route exact path="/cart" component={CartListContainer}/>
            <Route exact path="/checkout">
              {quantityInCart ? <Checkout/> : <Redirect to="/cart"/>}
            </Route>
            <Route exact path="/order-received/:orderId" component={OrderReceived}/>
            <Route path="/page-not-found" component={PageNotFound}/>
            <Route path="*">
              <Redirect to="/page-not-found"/>
            </Route>
          </Switch>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
