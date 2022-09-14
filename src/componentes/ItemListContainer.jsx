import React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = () => {
  return (
    <>
        
        <ItemCount initial={0} stock={5}/>
    </>
  )
}

export default ItemListContainer;