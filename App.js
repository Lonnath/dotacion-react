import React, {Component} from 'react'
import './index.css'
import './animaciones.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Cabecera from './components/cabecera/Cabecera'
import API from './servicios/Api'
export default function App (){
  return(
    <div className="App" id="body">
      <header>
        <Cabecera />
      </header>
      <main className="content-design">
        {this.state.dotaciones.m}
      </main>
    </div>
  )
}

export default App;
