import React, { useState, createContext } from "react";

const cartCtx = createContext();

export default function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addItem(item, cont) {
    if (isInCart(item.id)) {
      let newCartItems = cartItems.map((itemMapeo) => {
        if (itemMapeo.id === item.id) {
          itemMapeo.cont += cont;
          return itemMapeo;
        } else {
          return itemMapeo;
        }
      });
      setCartItems(newCartItems);
    } else {
      let newCartItems = cartItems.map((item) => item);
      newCartItems.push({ ...item, cont: cont });
      setCartItems(newCartItems);
    }
  }

  function isInCart(id) {
    let found = cartItems.some((item) => item.id === id); //este metodo solo me da true o false (pregunto si en el carrito hay algun item con ese id)
    return found;
  }

  function emptyCart() {
    return setCartItems([]);
  }

  function deleteItem(id) {
    return setCartItems(cartItems.filter((item) => item.id !== id));
  }

  function getItemQty() {
    return cartItems.reduce((acc, x) => (acc += x.cont), 0);
  }

  function getItemPrice() {
    return cartItems.reduce((acc, x) => (acc += x.precio * x.cont), 0);
  }

  function getTotalPrice() {
    return cartItems.reduce((acc, x) => (acc += x.cont * x.precio), 0);
  }

  return (
    //Acá pasamos el objeto value a los componentes hijos
    <cartCtx.Provider
      value={{
        cartItems,
        addItem,
        isInCart,
        emptyCart,
        deleteItem,
        getItemQty,
        getItemPrice,
        getTotalPrice,
      }}
    >
      {children}
    </cartCtx.Provider>
  );
}

export { cartCtx }; 
