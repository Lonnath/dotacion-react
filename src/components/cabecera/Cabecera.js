import React from 'react'
import {Navbar} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Tabla from '../tabla/Tabla'
import Insertar from '../insertar/Insertar'
export default function Cabecera({dotaciones}){
    return (
        <div>
            <Router>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand className="font-azaret-mono mx-5" href="/">Dotaciones-Software</Navbar.Brand>
                </Navbar>
                <div className="d-flex justify-content-end m-2">
                    <a href="/" className="text-sha btn btn-dark w-10">Inicio</a>
                    <Link to="/Insertar" className="text-sha btn btn-dark mx-5 w-10">Crear Dotacion </Link>
                </div>
                <Switch>
                    <Route path="/Insertar">
                        <Insertar />
                    </Route>
                    <Route path="/">
                        <Tabla dotaciones={dotaciones}/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}