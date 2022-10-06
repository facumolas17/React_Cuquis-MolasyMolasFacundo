import './App.css';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './componentes/Cart';
import CartContextProvider from './context/cartContext';
function App() {

  return (
    <div className="App">

      <CartContextProvider>

        <BrowserRouter>
          <NavBar/>
          <Routes>
            
            <Route path="/" element={
              <ItemListContainer/>
            }/>

            <Route path='/categoria/:cat' element={
              <ItemListContainer/>} 
            />
            
            <Route path="/producto/:id" element={
              <ItemDetailContainer/>
            }/>

            <Route path="/cart" element={
              <Cart/>
            }/>
            
          </Routes>
        </BrowserRouter>

      </CartContextProvider>
      
    </div>
  );
}

export default App;
