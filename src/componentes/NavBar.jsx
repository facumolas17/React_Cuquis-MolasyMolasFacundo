import React from 'react';

const NavBar = () => {
  return (
    <>
       <nav className="navbar navbar-expand-lg navbar-light py-3">
            <a className="navbar-brand" href="#"><img className="img-fluid img-logo" src={require("../assets/images/logo.png")} alt="Logo empresarial"></img></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Productos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contacto</a>
                </li>
                <li className="nav-item">
                    
                </li>
                
              </ul>
            </div>
          </nav>
    </>
  )
}

export default NavBar;