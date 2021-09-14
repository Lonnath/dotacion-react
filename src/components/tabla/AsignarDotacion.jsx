import React, {useState} from 'react'
import {Button, Modal, Table} from 'react-bootstrap'
import AsignarForm from './AsignarForm';
export default function AsignarDotacion ({dotacion}){
    const [show, setShow] = useState(false);

    const handleClose = () => {setShow(false); window.location.reload()};
    const handleShow = () => setShow(true);
  
    return (<>
        <Button variant="outline-success" onClick={handleShow}>
          Asignar
        </Button>
  
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Información de Dotación</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Codigo : </strong></td>
                        <td>{dotacion.codigo}</td>
                    </tr>
                    <tr>
                        <td><strong>Nombre dotación : </strong></td>
                        <td>{dotacion.nombre}</td>
                    </tr>
                    <tr>
                        <td><strong>Tipo : </strong></td>
                        <td>{dotacion.tipo}</td>
                    </tr>
                    <tr>
                        <td><strong>Sistema operativo : </strong></td>
                        <td>{dotacion.sistema_operativo}</td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <AsignarForm codigo = {dotacion.codigo} />
                        </td>
                    </tr>
                    
                    
                </tbody>
                </Table>
                
                <Button variant="secondary button-pos" onClick={handleClose}>
                    Cerrar
                </Button>
            </Modal.Body>
        </Modal>
      </>
    );
  }
    