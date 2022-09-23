import React from 'react';
import Navbar from './content/Navbar';
import '../styles/App.css'
import Contador from './layouts/Contador';
import ItemListConteiner from './layouts/ItemListConteiner';

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
