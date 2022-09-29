import React, { useState } from 'react';
import { useEffect } from 'react';
import { getItemDetail } from '../contenedores/productos';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

    let [prod, setProd]=useState({});

    const id = useParams().id;

    useEffect(() => {
        getItemDetail(id).then((respuestaDatos) => {
            setProd(respuestaDatos);    
        });
    },[id])


  return (
    <div>
        
            <ItemDetail prod={prod}/>
        

    </div>
  )
}

export default ItemDetailContainer;