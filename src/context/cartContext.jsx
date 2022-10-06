import React, { useState, createContext } from "react";

const cartCtx = createContext();

export default function cartContextProvider({children}){

    const [cartItems,setCartItems] = useState([]);

    function addItem(item, cont){

        if(isInCart(item.id)){
            let newCartItems = cartItems.map((itemMapeo) => {
                if(itemMapeo.id === item.id){
                    itemMapeo.cont += cont;
                    return itemMapeo;   
                }
                else{
                    return itemMapeo;
                }
            });
            setCartItems(newCartItems);
        }
        else {
            let newCartItems = cartItems.map((item) => item);
            newCartItems.push({ ...item, cont:cont });
            setCartItems(newCartItems); 
        }
    }

    function isInCart(id){
        let found = cartItems.some( item => item.id === id); //este metodo solo me da true o false (pregunto si en el carrito hay algun item con ese id)
        return found;
    }

    return(
        //Acá pasamos el objeto value a los componentes hijos
        <cartCtx.Provider value={ {cartItems, addItem, isInCart} }>
            { children }
        </cartCtx.Provider> 
    )
}

export {cartCtx};