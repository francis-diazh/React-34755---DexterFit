import React from 'react';

const Secciones = () => {
    return (
        <>
          <li className="nav-item">
          <a className="nav-link active" href="#">DexterFIT
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Accesorios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Preguntas Frecuentes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacto</a>
        </li>   
        </>
    );
}

export default Secciones;
