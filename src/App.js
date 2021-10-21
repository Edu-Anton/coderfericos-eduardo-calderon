import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting="Próximamente ..."/>
    </div>
  );
}

export default App;
