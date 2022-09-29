import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <>
       <nav className="navbar navbar-expand-lg navbar-light py-3">
            <Link className="navbar-brand" to="/"><img className="img-fluid img-logo" src={require("../assets/images/logo.png")} alt="Logo empresarial"></img></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="categoria/individuales ">individuales</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="categoria/combos">combos</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Contacto</Link>
                </li>
                <li className="nav-item">
                    <CartWidget/>
                </li>
                
              </ul>
            </div>
          </nav>
    </>
  )
}

export default NavBar;