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
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.title}</p>
            <p>{item.precio}</p>
            <p>Cantidad: {item.cont}</p>
            <p>Subtotal: {item.cont * item.precio}</p>
            
          </div>
        ))
      
      }
      
    </div>
  )
}

export default CartView;