import React, {useContext} from 'react';
import { cartCtx } from '../context/cartContext';

const CartWidget = () => {

  const { getItemQty } = useContext(cartCtx);

  return (
    <>
        <a className="nav-link" href="#"><i className="bi bi-cart2"><span>{getItemQty()}</span></i></a>
    </>
  )
}

export default CartWidget;