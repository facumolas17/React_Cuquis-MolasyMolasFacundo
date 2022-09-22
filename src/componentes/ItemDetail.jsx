import React from 'react';
import Item from './Item';
const ItemDetail = ({prod}) => {
  return (
    <div>
       <div className='container'>
            <div className=" row card-body text-center">
                <div>
                    <img className='img-fluid col-md-6 mb-3' src={require(`../assets/images/img-${prod.image}.jpg`)} alt='imagen producto' />
                    <h5 className='card-subtitle text-muted' >{prod.title}</h5>
                    <p className='text-secondary'>{prod.descriptionGeneral}</p>
                    <h6 className='card-text pt-2 text-secondary'>${prod.precio}</h6>
                </div>    
                    
            </div>
            
        </div>

    </div>
  )
}

export default ItemDetail;