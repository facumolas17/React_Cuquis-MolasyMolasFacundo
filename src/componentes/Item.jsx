import React from 'react';
import ItemCount from './ItemCount';
const Item = ({title, imagenUrl,precio}) => {
    const onAdd= (cont) =>{

        console.log(`Se agregaron al carrito ${cont} unidades`);
      }
  return (
    <div>
      <div className='card card-carrito m-3'>
          <div className="card-body text-center">
              <img className='img-fluid' src={require(`../assets/images/img-${imagenUrl}.jpg`)} alt='imagen producto' />
              <h4 className='card-title pt-2'>{title}</h4>
              <h6 className='card-text pt-3 text-secondary'>${precio}</h6>
              <ItemCount initial={1} stock={5} onAdd={onAdd}/>
              
          </div>

      </div>
    </div>
  )
}

export default Item;