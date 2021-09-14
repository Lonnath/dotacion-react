import React from "react";
import API from '../../servicios/Api'
import {Table,Alert} from 'react-bootstrap'
export default class AsignarForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            codigo : props.codigo,
            empleado_nombre:"",
            empleado_email:""
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
        let val = true;
            if (this.state.empleado_nombre === null || this.state.empleado_nombre === ''){
            val = false;
        }
        if (this.state.empleado_email === null || this.state.empleado_email === ''){
            val = false;
        }
        if (val){
            const data = {
                codigo : this.state.codigo,
                empleado_nombre : this.state.empleado_nombre,
                empleado_email : this.state.empleado_email,
            }
            API.post('/api/asignar_dotacion/', data).then(response => this.setState({alerta : <Alert variant={response.data.CODE === 1 ? "success" : "warning"}>{response.data.MESSAGE}</Alert> }))
            event.preventDefault(); 
        }else {
            this.setState({alerta:<Alert variant="danger">Faltan campos, verifique por favor.</Alert>})
            event.preventDefault(); 
            
        }
        
        
    }
  
    render() {
      return (
        
        <div>
            <div id ="alerta">
                {this.state.alerta}
            </div>
            <form onSubmit={this.handleSubmit}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="mb-3 control">
                            <td><strong>Nombre Empleado :</strong></td>
                            <td><input type="text" className="form-control" name="empleado_nombre" value={this.state.numberOfGuests} onChange={this.handleInputChange} /></td>
                        </tr>

                        <tr className="mb-3 control">
                            <td><strong>Email Empleado :</strong></td>
                            <td><input type="email" class="form-control"  name="empleado_email" value={this.state.numberOfGuests} onChange={this.handleInputChange} /></td>
                        </tr>
                    </tbody>
                </Table>
                <div className="d-flex justify-content-end"> 
                    <button type="submit" className="btn btn-success">Asignar</button>
                </div>
            </form>
        </div>
    
      );
    }
  }