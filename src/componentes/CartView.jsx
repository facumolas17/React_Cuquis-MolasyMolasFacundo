import { Button } from 'bootstrap';
import React from 'react';
import { useContext } from 'react';
import { cartCtx } from '../context/cartContext';

const CartView = () => {

  const context = useContext(cartCtx);
  const { cartItems, emptyCart, deleteItem } = context;
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