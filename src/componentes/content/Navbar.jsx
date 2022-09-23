import React from 'react';
import Form from '../layouts/Form';
import Dropdown from '../layouts/Dropdown';
import Secciones from '../layouts/Secciones';
import CartWidget from '../layouts/CartWidget';

const Navbar = () => {
  const listDrop = ["Proteinas","Creatinas","Aminoacidos","Quemadores"]
    return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <Secciones/>
              <Dropdown lista={listDrop}/>  
            </ul>
            <Form busqueda="Buscar producto"/>
            <CartWidget/>
          </div>
        </div>

    
      </nav>
    </>
    );
}

export default Navbar;
