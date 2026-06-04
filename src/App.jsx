import { useState } from 'react';


import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import Electronicos from './components/Electronicos';
import Ropa from './components/Ropa';
import Accesorios from './components/Accesorios';
import Contacto from './components/Contacto';

import './index.css';


function App() {
    const [pagina, setPagina] = useState("inicio");


  return (
    <>
      <Navbar onNavigate={setPagina} />

      {pagina === "inicio" && <Inicio onNavigate={setPagina} />}
      {pagina === "electronicos" && <Electronicos />}
      {pagina === "ropa" && <Ropa />}
      {pagina === "accesorios" && <Accesorios />}
      {pagina === "contacto" && <Contacto />}
  
    </>
  )
}

export default App
