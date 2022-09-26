import React from 'react';
import imgDetail from '../assets/images/img-eleonor.jpg';

const ItemDetail = ({prod}) => { 

  return (
    <div>
        <div className='container text-center detail'>        
          <img className='img-fluid col-md-6 mb-3' src={imgDetail} alt='imagen producto' />
          <h5 className='card-subtitle text-muted' >{prod.title}</h5>
          <p className='text-secondary'>{prod.descriptionGeneral}</p>
          <h6 className='card-text pt-2 text-secondary'>${prod.precio}</h6>
        </div>         
    </div>
  )
}

export default ItemDetail;