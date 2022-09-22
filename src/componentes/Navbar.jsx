import React from 'react';
import Form from './Form';
import Dropdown from './Dropdown';
import Secciones from './Secciones';
import CartWidget from './CartWidget';

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
