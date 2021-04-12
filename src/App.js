import React, {Fragment} from 'react';
import logo from './assets/logo.svg';
import './App.css';

import NavBar from './components/NavBar'
import Workplace from './components/Workplace'

function App() {

  return (
    <Fragment>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="colunm">
          <h2 className="text-align-center">Editor de imagenes</h2>
          <h6>Hecho por Giselt Grimilda y Denis Adrián</h6>
        </div>
      </header>

      <NavBar/>
      <Workplace/>
    </div>
    
    </Fragment>
  );
}

export default App;
