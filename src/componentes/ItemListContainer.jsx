import React from 'react';
import getItems from '../contenedores/productos';
import { useState } from 'react';
import { useEffect } from 'react';
import ItemList from './ItemList';

const ItemListContainer = () => {
  
  let [data,setData]=useState([]);
 
  useEffect(() => {
    getItems().then((respuestaDatos) => {
      setData(respuestaDatos);
    });
  },[])

  return (
    <div>  
     
      <ItemList data={data}/>  
            
    </div>
        

    
  )
}

export default ItemListContainer;