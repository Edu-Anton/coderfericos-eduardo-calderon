import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemDetailContainer/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
