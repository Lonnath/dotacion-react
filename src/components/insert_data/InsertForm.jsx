import React from "react";
import API from '../../services/Api'
import {Alert, Button, Form} from 'react-bootstrap'
import SpinnerComponent from '../spinner/SpinnerComponent.jsx';
export default class InsertForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            codigo: "",
            nombre: "",
            tipo : "",
            sistema_operativo : "",
            alerta : "",
            loading : true,
        };
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
        const data = {
            codigo : this.state.codigo,
            nombre : this.state.nombre,
            tipo : this.state.tipo,
            sistema_operativo : this.state.sistema_operativo
        }
        this.setState({loading:false});  
        setTimeout(() => {
            API.post('/api/insertar_dotacion/', data).then(
                response => this.setState({alerta : <Alert variant={response.data.CODE === 1 ? 
                    "success" : "warning"}>{response.data.MESSAGE}</Alert>, loading : true})
            )  
        }, 1000);
        event.preventDefault(); 
    }
    render() {
      return (
        <div className="d-block">
            <div className="font-32 control mt-4">Dotación <span className="point">«</span></div>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mx-1 my-1 control">
                    <Form.Label><strong>Código</strong></Form.Label><span className="point mx-2">«</span>
                    <Form.Control type="text" className="form-control" name="codigo" value={this.state.numberOfGuests} onChange={this.handleInputChange} required/>
                </Form.Group>
                <Form.Group className="mx-1 my-3 control">
                    <Form.Label><strong>Nombre dotación</strong></Form.Label><span className="point mx-2">«</span>
                    <Form.Control type="text" className="form-control" name="nombre" value={this.state.numberOfGuests} onChange={this.handleInputChange} required/>
                </Form.Group>
                <Form.Group className="mx-1 my-3 control">
                    <Form.Label><strong>Tipo</strong></Form.Label><span className="point mx-2">«</span>
                    <Form.Control type="text" className="form-control" name="tipo" value={this.state.numberOfGuests} onChange={this.handleInputChange} required/>
                </Form.Group>
                <Form.Group className="mx-1 my-3 control">
                    <Form.Label><strong>Sistema operativo</strong></Form.Label><span className="point mx-2">«</span>
                    <Form.Control type="text" className="form-control" name="sistema_operativo" value={this.state.numberOfGuests} onChange={this.handleInputChange} required/>
                </Form.Group>
                <div className="d-flex justify-content-end mb-2"> 
                    <Button variant="success" className="close-button" type="submit">
                        Asignar
                    </Button>
                </div>
                <div id ="alerta" className="mt-3">
                    {
                        this.state.loading ? this.state.alerta : <div className="d-flex justify-content-center"><SpinnerComponent /></div> 
                    }
                </div>
            </Form>
        </div>
      );
    }
  }