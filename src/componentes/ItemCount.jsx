import React from 'react';
import { useState } from 'react';

const ItemCount = ({initial, stock}) => {

    const [cont,setCont]=useState(initial);
    
    const incrementarCant =()=>{
        if(cont<stock){
            setCont(cont+1);
        }
        
    } 

    const decrementarCant=()=>{
        if(cont>initial){
        setCont(cont-1);
        }
    }

  return (
    <div>
        <div className="card">
            <div className="card-body">
            <a href="#" className='btn btn-outline-secondary' onClick={incrementarCant}>+</a>
            <p>{cont}</p>
            <a href="#" className='btn btn-outline-secondary' onClick={decrementarCant}>- </a>

            </div>
        </div>
    </div>
  )
}

export default ItemCount;