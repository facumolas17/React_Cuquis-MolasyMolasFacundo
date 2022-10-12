import React, { useState } from 'react';
import { useEffect } from 'react';
import { getItemDetail } from '../contenedores/productos';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { DotWave } from '@uiball/loaders';




const ItemDetailContainer = () => {

    const [prod, setProd]=useState({});

    const [error,setError] = useState(false);

    const id = useParams().id;

    useEffect(() => {
        getItemDetail(id)
        .then((respuestaDatos) => setProd(respuestaDatos))
        .catch((errorMsg) => {
          setError(errorMsg.message)   
      });
    },[id])

    if(!prod.name){
      return <>
      
        {
          error ?
          <div>
            <h2 style={ {color: "#aa0033"}}>Error obteniendo los datos</h2>
            <p>{ error }</p> 
          </div>
          :
          <h3>
            <DotWave 
              size={47}
              speed={1} 
              color="black" 
            />
         </h3>
        }

      </>
    }

  return (
    <div>
        
            <ItemDetail prod={prod}/>
        

    </div>
  )
}

export default ItemDetailContainer;