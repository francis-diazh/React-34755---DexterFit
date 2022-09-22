import React from 'react';
import Navbar from './componentes/Navbar';
import './App.css'
import Contador from './componentes/Contador';
import ItemListConteiner from './componentes/ItemListConteiner';

const App = () => {
    return (
        <>
          <Navbar/>
          <br></br>
          <ItemListConteiner/>
          <br />
          <Contador/>
        </>
    );
  }


export default App;
