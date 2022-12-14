import React from "react";
import { useState } from "react";

const ItemCount = ({ initial, stock, onAddToCart }) => {
  const [cont, setCont] = useState(initial);

  const incrementarCant = () => {
    if (cont < stock) {
      setCont(cont + 1);
    }
  };

  const decrementarCant = () => {
    if (cont > initial) {
      setCont(cont - 1);
    }
  };

  return (
    <div>
      <div>
        <div className="text-center ">
          <button
            href="#"
            className="btn btn-outline-secondary m-3"
            disabled={cont <= 1}
            onClick={decrementarCant}
          >
            -
          </button>
          <span>{cont}</span>
          <button
            href="#"
            className="btn btn-outline-secondary m-3"
            disabled={cont >= stock}
            onClick={incrementarCant}
          >
            +
          </button>
          <div>
            <button
              className="btn btn-outline-dark"
              disabled={stock <= 0}
              onClick={() => onAddToCart(cont)}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
