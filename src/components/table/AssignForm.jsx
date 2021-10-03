import React from "react";
import API from '../../services/Api'
import {Alert, Row, Col, Button, Form} from 'react-bootstrap'
import SpinnerComponent from '../spinner/SpinnerComponent.jsx';
export default class AsignForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            codigo : props.endow.element.codigo,
            empleado_nombre: "",
            empleado_email: "",
            handleClose : props.handleClose,
            alerta : "",
            loading : true,
        };
        console.log(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
  
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        let today = new Date();
        const now = String(today.getDate()).padStart(2, '0') + '/' + String(today.getMonth() + 1).padStart(2, '0') + '/' + today.getFullYear();
        const data = {
            codigo : this.state.codigo,
            empleado_nombre : this.state.empleado_nombre,
            empleado_email : this.state.empleado_email,
        }
        this.setState({loading:false});  
        setTimeout(() => {
            document.title = "Actualizando..." 
            API.post('/api/asignar_dotacion/', data).then(
                response => {
                    this.setState(
                        (state) => {
                            return {
                                alerta : <Alert variant={response.data.CODE === 1 ? "success" : "warning"}>{response.data.MESSAGE}</Alert>                     
                            }
                        }
                    )
                    setTimeout(() => {
                        if(response.data.CODE === 1){
                            this.props.endow.fntSetData(this.props.endow.pos, now, data.empleado_nombre, data.empleado_email);
                        }
                    }, 2000);
                }
            )
        }, 1000);
        event.preventDefault();    
    }
    render() {
        return (
            <div>
                <Row className="border-bottom">
                    <Col>
                        <span className="font-32">
                            Asignar
                        </span> 
                    </Col>
                </Row>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mx-1 my-3">
                        <Form.Label>Nombre Empleado:</Form.Label>
                        <Form.Control className="form-control" name="empleado_nombre" value={this.state.numberOfGuests} onChange={this.handleInputChange} maxLength="50" required/>
                    </Form.Group>
                    
                    <Form.Group className="mx-1 my-3" controlId="formBasicEmail">
                        <Form.Label>Email Empleado:</Form.Label>
                        <Form.Control type="email" className="form-control"  name="empleado_email" value={this.state.numberOfGuests} onChange={this.handleInputChange} maxLength="100" required/>
                    </Form.Group>

                    <div id ="alerta">
                        {
                            this.state.loading ? this.state.alerta : <div class="d-flex justify-content-center mb-2"><SpinnerComponent /></div>
                        }
                    </div>
                    <div className="d-flex justify-content-end mb-2"> 
                        <Button variant="secondary" onClick={this.state.handleClose} className="close-button me-4">
                            Cerrar
                        </Button>
                        <Button variant="success" className="close-button" type="submit">
                            Asignar
                        </Button>
                    </div>
                </Form>
            </div>
        );
    }
}