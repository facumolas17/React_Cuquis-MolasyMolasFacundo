import React from 'react';
import Item from './Item';
const ItemList = ({data}) => {
    

  return (
    <div>
      <div className='container d-flex justify-content-center align-items-center'>
          <div className="row">
              {
                  data.map(item => (
                      <div className='col-md-4' key={item.id}>
                          <Item title={item.title} imagenUrl={item.image} precio={item.precio} />
                      </div>
                  ))
              }
          </div>
      </div>

    </div>
  )
}

export default ItemList;