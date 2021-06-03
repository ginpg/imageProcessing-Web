import React, { useState } from 'react';
import { Container } from 'react-bootstrap'

import './estilos/estilos.css'
import G from './assets/G.jpg'

//iconos
import ORIGINAL from './assets/icons/ORIGINAL.png'
import BW from './assets/icons/BW.png'
import GREY from './assets/icons/GREY.png'
import NEG from './assets/icons/NEG.png'
import ROTL from './assets/icons/rotL.png'
import ROTR from './assets/icons/rotR.png'


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
        <Container>
          <h1>Editor de Imágenes</h1>
          <h5>Elaborado por Denis y Giselt</h5>
        </Container>
          
      </header>

      <nav className="nav">
          <Container className="nav-container">
            {/*<a><h5>Home</h5></a>*/}
          </Container>
      </nav>

      <hr/>

      <Container className="app">

        <Container className="workspace">
            
            <Container className="contenedor-contenido">

              <Container className="side-menu">
                <div className="inside-side-menu">
                  <label>Iluminación</label>
                  <input type="range" min="0" max="100" className="slider"/>
                  <label>Contraste</label>
                  <input type="range" min="0" max="100" className="slider"/>
                  <button type="button" className="btn btn-outline-light">Guardar</button>
                </div>
                
              </Container>

              {preview===''
                ? <img src={G} className="imagen"  height="500" alt="imagen"/>
                : <img src={preview} className="imagen" height="500" alt="imagen"/>
              }

            </Container>

            <div className="file-selector">
                <input  type="file" id="foto" accept=".jpg, .jpeg, .png" onClick={extractFile}/>
            </div>

            <Container className="menubar">
                  <img src={ORIGINAL} width="150" height="150" className="filter-button" alt="original"/>
                  <img src={BW} width="150" height="150" className="filter-button" alt="blackwhite" />
                  <img src={GREY} width="150" height="150" className="filter-button" alt="grey"/>
                  <img src={NEG} width="150" height="150" className="filter-button" alt="negative"/>
                  <img src={ROTL} width="150" height="150" className="filter-button" alt="rotacion-izq"/>
                  <img src={ROTR} width="150" height="150" className="filter-button" alt="rotacion-der"/>

                  <img src={ORIGINAL} width="150" height="150" className="filter-button" alt="original"/>
                  <img src={BW} width="150" height="150" className="filter-button" alt="blackwhite" />
                  <img src={GREY} width="150" height="150" className="filter-button" alt="grey"/>
                  <img src={NEG} width="150" height="150" className="filter-button" alt="negative"/>
                  <img src={ROTL} width="150" height="150" className="filter-button" alt="rotacion-izq"/>
                  <img src={ROTR} width="150" height="150" className="filter-button" alt="rotacion-der"/>
            </Container>        
        </Container>

        <Container className="second-container">
        <p>Hola</p>
      </Container>

      </Container>

    </>
  );
}

export default App;
