import React from "react";
import { useContext } from "react";
import { cartCtx } from "../context/cartContext";
import { Link } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const CartView = () => {
  const context = useContext(cartCtx);
  const { cartItems, emptyCart, deleteItem, getTotalPrice } = context;

  if (cartItems.length === 0) {
    return (
      <>
        <p>No hay productos seleccionados</p>
        <Link className="btn btn-outline-secondary" to="/">
          Click aquí para comprar
        </Link>
      </>
    );
  }

  return (
    <div>
      {cartItems.map((item) => (
        <div className="d-flex flex-column align-items-center " key={item.id}>
          <img className="img-fluid col-3" src={item.image} />
          <h3>{item.name}</h3>
          <p>{item.title}</p>
          <p>Precio: {item.precio}</p>
          <p>Cantidad: {item.cont}</p>
          <p>Subtotal: {item.cont * item.precio}</p>
          <button
            onClick={() => deleteItem(item.id)}
            className="btn btn-outline-warning pequeño"
          >
            Eliminar
          </button>
          <p>------------------------------</p>
        </div>
      ))}

      <div className="d-flex flex-column align-items-center">
        --------------------------------------------------------
        <p className="text-center mt-2">
          <strong> Total: {getTotalPrice()}</strong>
        </p>
        <button
          className="btn btn-outline-warning pequeño m-2 "
          onClick={emptyCart}
        >
          Vaciar carrito
        </button>
        <CheckoutForm />
      </div>
    </div>
  );
};

export default CartView;
