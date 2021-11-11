import {BrowserRouter, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/Index';
import ItemListContainer from './components/ItemListContainer/Index';
import Navbar from './components/Navbar/Index';
import Footer from './components/Footer/Index';
import CartListContainer from './components/CartListContainer/Index';
import CartContextProvider from './context/CartContext';

function App() {
  return (
    <div className="App min-vh-100 d-flex flex-column">
      <CartContextProvider>
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={ItemListContainer}/>
            <Route exact path="/categories/:categoryId" component={ItemListContainer}/>
            <Route exact path="/products/:productId" component={ItemDetailContainer}/>
            <Route exact path="/cart" component={CartListContainer}/>
          </Switch>
          <Footer/>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
