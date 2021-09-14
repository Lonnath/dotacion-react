import React from "react";
import API from '../../servicios/Api'
import Alert from 'react-bootstrap/Alert'
export default class InsertForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            codigo: "",
            nombre: "",
            tipo : "",
            sistema_operativo : "",
            alerta : ""
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
            if (this.state.codigo === null || this.state.codigo === ''){
            val = false;
        }
        if (this.state.nombre === null || this.state.nombre === ''){
            val = false;
        }
        if (this.state.tipo === null || this.state.tipo === ''){
            val = false;
        }
        if (this.state.sistema_operativo === null || this.state.sistema_operativo === ''){
            val = false;
        }
        if (val){
            const data = {
                codigo : this.state.codigo,
                nombre : this.state.nombre,
                tipo : this.state.tipo,
                sistema_operativo : this.state.sistema_operativo
            }
            API.post('/api/insertar_dotacion/', data).then(response => this.setState({alerta : <Alert variant={response.data.CODE === 1 ? "success" : "warning"}>{response.data.MESSAGE}</Alert> }))
            event.preventDefault(); 
        }else {
            this.setState({alerta:<Alert variant="danger">Faltan campos, verifique por favor.</Alert>})
            event.preventDefault(); 
            
        }
        
        
    }
  
    render() {
      return (
        
        <div className="d-block">
            <div id ="alerta">
                {this.state.alerta}
            </div>
            <div className="font-32 font-glory-sans-serif control">Dotación <span className="point">«</span></div>
            <form onSubmit={this.handleSubmit}>
                <div className="mb-3 control">
                    <strong><label  className="form-label">Código</label></strong><span className="point mx-2">«</span>
                    <input type="text" className="form-control" name="codigo" value={this.state.numberOfGuests} onChange={this.handleInputChange} />
                </div>
                <div className="mb-3 control">
                    <strong><label  className="form-label">Nombre dotación</label></strong><span className="point mx-2">«</span>
                    <input type="text" className="form-control" name="nombre" value={this.state.numberOfGuests} onChange={this.handleInputChange} />
                </div>
                <div className="mb-3 control">
                    <strong><label  className="form-label">Tipo</label></strong><span className="point mx-2">«</span>
                    <input type="text" className="form-control" name="tipo" value={this.state.numberOfGuests} onChange={this.handleInputChange} />
                </div>
                <div className="mb-3 control">
                    <strong><label  className="form-label">Sistema operativo</label></strong><span className="point mx-2">«</span>
                    <input type="text" className="form-control" name="sistema_operativo" value={this.state.numberOfGuests} onChange={this.handleInputChange} />
                </div>
                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-success">Insertar</button>
                </div>
            </form>
        </div>
       
      );
    }
  }