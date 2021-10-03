import React, {useState, useEffect} from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import TableIndex from '../table/TableData.jsx';
import Insertar from '../insert_data/Insert.jsx';
import Api from '../../services/Api';
import SpinnerComponent from '../spinner/SpinnerComponent.jsx';
export default function HeaderComponent(){
    const [endow, setEndow] = useState([]);
    const [loading, setLoading] = useState(false);
    const loadData = async () => {
        try{
            await Api.get("/api/dotacion").then((data) => {
                setEndow(data.data.DATA);
                setLoading(true);
            })
        }catch (e){
            console.log("API ERROR.");
        }
    }

    useEffect(() => {
        setTimeout(() => {
            loadData();
        }, 1000);
    }, []);



    return (
        <div>
            <Router>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand className="mx-5" href="/">Dotaciones-Software</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                            </Nav>
                            <Nav>
                                <a href="/Datos" className="text-sha btn btn-dark mx-5 w-10">Datos</a>
                                <Link to="/Insertar" className="text-sha btn btn-dark mx-5 w-10">Crear Dotacion </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Switch>
                    <Route path="/Insertar">
                        <Insertar />
                    </Route>
                    <Route path="/Datos">
                        {
                            loading ? <TableIndex endow={endow} /> : <div className="center"><SpinnerComponent /></div>
                        }
                    </Route>
                    <Route path="/">
                        {
                            loading ? <TableIndex endow={endow} /> : <div className="center"><SpinnerComponent /></div>                        
                        }
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}