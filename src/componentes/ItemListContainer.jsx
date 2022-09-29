import React from 'react';
import getItems, { getItemsByCategory } from '../contenedores/productos';
import { useState } from 'react';
import { useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
const ItemListContainer = () => {
  
  let [data,setData]=useState([]);

  const cat=useParams().cat;
 
  useEffect(() => {
    if(cat === undefined){
      getItems().then((respuestaDatos) => {
        setData(respuestaDatos);
      });
    }
    else{
      getItemsByCategory(cat).then((respuestaDatos) => {
        setData(respuestaDatos);
      });
    }
  },[cat])

  return (
    <div>  
     
      <ItemList data={data}/>  
            
    </div>
        

    
  )
}

export default ItemListContainer;