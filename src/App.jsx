import { useState } from 'react';


import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import Electronicos from './components/Electronicos';

import './index.css';


function App() {
    const [pagina, setPagina] = useState("inicio");


  return (
    <>
      <Navbar onNavigate={setPagina} />

      {pagina === "inicio" && <Inicio />}
      {pagina === "electronicos" && <Electronicos />}
  
    </>
  )
}

export default App
