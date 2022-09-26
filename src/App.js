import './App.css';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/NavBar';


function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <ItemDetailContainer />
      {/*<ItemListContainer/> */}
      
    </div>
  );
}

export default App;
