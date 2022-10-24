import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { cartCtx } from '../context/cartContext';
import { createBuyOrder } from '../contenedores/firestore';

const CheckoutForm = () => {

    const [dataForm, setDataForm] = useState({
        name:"",
        phone:"",
        email:""
    });

    const navigate = useNavigate();
    const context = useContext(cartCtx);
    const { cartItems, getTotalPrice } = context;

    function handleCheckout(event){

        event.preventDefault();

        const orderData = {
        buyer: dataForm,
        items: cartItems,
        total: getTotalPrice()
        }

        createBuyOrder(orderData).then( nroOrden => {
        navigate(`/checkout/${nroOrden}`)
        })
}

    function inputChangeHandler(event){
        let inputName = event.target.name;
        let value = event.target.value;

        const newDataForm = {...dataForm};
        newDataForm[inputName] = value;
        setDataForm(newDataForm);
        


    }

  return (
    <div>
        <form onSubmit={handleCheckout} className='d-flex flex-column '>
            <div className="form-row">

                <div className="form-group col-12">
                    <label htmlFor="name">Nombre</label>
                    <input value={dataForm.name} onChange={inputChangeHandler} type="text" name='name' placeholder='Nombre' className="form-control" required/>
                </div>    
            </div>
            <div className="form-row">    
                <div className="form-group col-12">
                    <label htmlFor="email">Email</label>
                    <input value={dataForm.email} onChange={inputChangeHandler} type="email" className="form-control" name='email' placeholder="Email" required />
                </div>
                
            </div>
            
            <div className="form-row">
                <div className="form-group col-12">
                    <label htmlFor="telefono">Teléfono</label>
                    <input value={dataForm.phone} onChange={inputChangeHandler} type="text" name='phone' className="form-control" placeholder='Teléfono' required/>
                </div>  
                
            </div>
            
            <button type="submit" className="btn btn-primary mt-2 ">Finalizar compra</button>
        </form>
        

    </div>
  )
}

export default CheckoutForm;