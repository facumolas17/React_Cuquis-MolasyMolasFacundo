import React from 'react';
import imgDetail from '../assets/images/img-eleonor.jpg';
import ItemCount from './ItemCount';

const ItemDetail = ({prod}) => { 

  const onAdd= (cont) =>{
    console.log(`Se agregaron al carrito ${cont} unidades`);
  }

  return (
    <div>
        <div className='container text-center detail'>        
          <img className='img-fluid col-md-6 mb-3' src={imgDetail} alt='imagen producto' />
          <h4 className='card-subtitle text-muted' >{prod.name}</h4>
          <h5 className='card-subtitle text-muted' >{prod.title}</h5>
          <p className='text-secondary'>{prod.descriptionGeneral}</p>
          <h6 className='card-text pt-2 text-secondary'>${prod.precio}</h6>
          <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        </div>         
    </div>
  )
}

export default ItemDetail;