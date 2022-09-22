import React, { useState } from 'react';
import { useEffect } from 'react';
import { getItemDetail } from '../contenedores/productos';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {

    let [prod, setProd]=useState({});

    useEffect(() => {
        getItemDetail().then((respuestaDatos) => {
            setProd(respuestaDatos);
            
        });
    },[])


  return (
    <div>
        {
            <ItemDetail prod={prod}/>
        }

    </div>
  )
}

export default ItemDetailContainer;