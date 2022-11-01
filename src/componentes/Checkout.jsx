import React from 'react';
import { useParams } from 'react-router-dom';


const Checkout = () => {

  const {nroOrden} = useParams();
  return (
    <div>
      <div className='text-center'>
        <h3>¡Tu compra fue realizada con éxito!</h3>
        <h3>El localizador de tu compra es: <strong className='text-warning'>{nroOrden}</strong></h3>
      </div>
    </div>
  )
}

export default Checkout;