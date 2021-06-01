import React, { useState } from 'react';
import { Container } from 'react-bootstrap'

import './estilos/estilos.css'
import G from './assets/G.jpg'

function App() {
      //Extraer imagen
      const[preview, setPreview] = useState('');
      const extractFile = e => {
        const fileSelector = document.getElementById('foto')
        fileSelector.addEventListener('change', event => {
          const file = event.target.files[0]
          const reader = new FileReader()
          reader.readAsDataURL(file)
          reader.onload = function () { setPreview(reader.result)}
        })
    }

  return (
    <>
      <header className="header">
          BESTIA VALE
      </header>

      <nav className="nav">
            <input type="file" id="foto" accept=".jpg, .jpeg, .png" onClick={extractFile}/>
            <button type="button">Guardar</button>
      </nav>

      <hr/>

      <Container className="app">
        <Container className="workspace">
            
            {preview===''
              ? <img src={G} className="imagen" width="500" height="500" alt="imagen"/>
              : <img src={preview} className="imagen" width="500" height="500" alt="imagen"/>
            }
          
            <Container className="menubar"></Container>
          
        </Container>
      </Container>
    </>
  );
}

export default App;
