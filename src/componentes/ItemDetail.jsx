import React, { useContext } from "react";
import { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { cartCtx } from "../context/CartContext";

const ItemDetail = ({ prod }) => {
  const { addItem } = useContext(cartCtx);

  const [estadoCart, setEstadoCart] = useState(false);

  const onAddToCart = (cont) => {
    setEstadoCart(true);
    addItem(prod, cont);
  };

  return (
    <div>
      <div className="container text-center detail d-flex flex-column align-items-center">
        <img
          className="img-fluid col-md-6 mb-3"
          src={prod.image}
          alt="imagen producto"
        />
        <h4 className="card-subtitle text-muted">{prod.name}</h4>
        <h5 className="card-subtitle text-muted">{prod.title}</h5>
        <p className="text-secondary">{prod.descriptionGeneral}</p>
        <h6 className="card-text pt-2 text-secondary">${prod.precio}</h6>

        {estadoCart === true ? (
          <Link to="/cart" className="btn btn-outline-secondary m-3">
            Ir al carrito
          </Link>
        ) : (
          <ItemCount initial={1} stock={prod.stock} onAddToCart={onAddToCart} />
        )}
        <Link className="btn btn-outline-dark mt-2" to="/">
          Click aquí para seguir comprando
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
