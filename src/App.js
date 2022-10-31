import './App.css';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CartContextProvider from './context/cartContext';
import CartView from './componentes/CartView';
import Checkout from './componentes/Checkout';
import Header from './componentes/Header';
function App() {

  return (
    <div className="App">

      <CartContextProvider>

        <BrowserRouter>
          <NavBar />
          <Header />
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
              <CartView/>
            }/>
            
            <Route path="/checkout/:nroOrden" element={
            <Checkout/>
            }/>
            
          </Routes>
        </BrowserRouter>

      </CartContextProvider>
      
    </div>
  );
}

export default App;
