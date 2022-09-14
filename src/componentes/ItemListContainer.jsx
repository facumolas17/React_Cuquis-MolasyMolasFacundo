import React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = () => {
  const onAdd= (cont) =>{

    console.log(`Se agregaron al carrito ${cont} unidades`);
  }

  return (
    <div>
        
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
    </div>
  )
}

export default ItemListContainer;