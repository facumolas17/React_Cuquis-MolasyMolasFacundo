import './App.css';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/NavBar';

function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <ItemListContainer greeting="mundo" />
      <ItemListContainer greeting="mundo 2"/>
    </div>
  );
}

export default App;
