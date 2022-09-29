import React from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const Item = ({name, title, imagenUrl,precio,id}) => {

    const urlDetalle =`/producto/${id}`;

    const onAdd= (cont) =>{
        console.log(`Se agregaron al carrito ${cont} unidades`);
      }
  return (
    <div>
      <div className='card m-3 card-carrito'>
          <div className="card-body text-center">
              <img className='img-fluid' src={require(`../assets/images/img-${imagenUrl}.jpg`)} alt='imagen producto' />
              <h4 className='card-title pt-2'>#{name}</h4>
              <h5 className='card-subtitle text-muted' >{title}</h5>
              <h6 className='card-text pt-3 text-secondary'>${precio}</h6>
              <Link to={urlDetalle}>
                <button className='btn btn-outline-warning'>Ver más...</button>
              </Link>
              <ItemCount initial={1} stock={5} onAdd={onAdd}/>
              
          </div>

      </div>
    </div>
  )
}

export default Item;