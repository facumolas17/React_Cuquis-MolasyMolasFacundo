import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { cartCtx } from "../context/CartContext";
import { createBuyOrder } from "../contenedores/firestore";

const CheckoutForm = () => {
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const navigate = useNavigate();
  const context = useContext(cartCtx);
  const { cartItems, getTotalPrice, emptyCart } = context;

  function handleCheckout(event) {
    event.preventDefault();

    const orderData = {
      buyer: dataForm,
      items: cartItems,
      date: new Date(),
      total: getTotalPrice(),
    };

    createBuyOrder(orderData).then((nroOrden) => {
      navigate(`/checkout/${nroOrden}`);
    });
    emptyCart();
  }

  function inputChangeHandler(event) {
    let inputName = event.target.name;
    let value = event.target.value;

    const newDataForm = { ...dataForm };
    newDataForm[inputName] = value;
    setDataForm(newDataForm);
  }

  return (
    <div>
      <h3 className="text-center mt-3">Ingrese sus datos:</h3>
      <form onSubmit={handleCheckout} className="d-flex flex-column mb-3">
        <div className="form-row">
          <div className="form-group col-12">
            <label htmlFor="name">Nombre</label>
            <input
              value={dataForm.name}
              onChange={inputChangeHandler}
              type="text"
              name="name"
              placeholder="Nombre"
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-12">
            <label htmlFor="email">Email</label>
            <input
              value={dataForm.email}
              onChange={inputChangeHandler}
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-12">
            <label htmlFor="telefono">Teléfono</label>
            <input
              value={dataForm.phone}
              onChange={inputChangeHandler}
              type="text"
              name="phone"
              className="form-control mb-2"
              placeholder="Teléfono"
              required
            />
          </div>
        </div>

        <button type="submit" className="btn btn-warning mt-2 ">
          Finalizar compra
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
