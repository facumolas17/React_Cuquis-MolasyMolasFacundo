import React, {useContext} from 'react';
import { cartCtx } from '../context/CartContext';
import { Link } from 'react-router-dom';
const CartWidget = () => {

  const { getItemQty } = useContext(cartCtx);

  return (
    <>
        <Link className="nav-link" to='/cart'><i className="bi bi-cart2"><span>{getItemQty() > 0 && getItemQty()}</span></i></Link>
    </>
  )
}

export default CartWidget;