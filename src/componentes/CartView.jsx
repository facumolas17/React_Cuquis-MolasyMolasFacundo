import React from 'react';
import { useContext } from 'react';
import { cartCtx } from '../context/cartContext';
import { Link } from 'react-router-dom';

const CartView = () => {

  const context = useContext(cartCtx);
  const { cartItems, emptyCart, deleteItem } = context;

  if(cartItems.length === 0){
    return (
      <>
        <p>No hay productos seleccionados en el carrito</p>
        <Link className='btn btn-outline-secondary' to='/'>Click aquí para seguir comprando</Link>
      </>
      )
  }


  return (
    <div>
      {
        cartItems.map((item) =>(
          <div className='d-flex flex-column align-items-center '  key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.title}</p>
            <p>Precio: {item.precio}</p>
            <p>Cantidad: {item.cont}</p>
            <p>Subtotal: {item.cont * item.precio}</p>
            <button onClick={() => deleteItem(item.id)} className='btn btn-outline-warning pequeño'>Eliminar</button>
            
          </div>
        ))
          
      }
      
    </div>
    
  )
  
}

export default CartView;