import React, {useState} from 'react'
import {Button, Modal, Table} from 'react-bootstrap'
import AssignForm from './AssignForm';
export default function AssignEndow ({endow}){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="outline-success" className="w-100" onClick={handleShow}>
                Asignar
            </Button>
    
            <Modal 
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header>
                        <Modal.Title>Información de Dotación</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table striped bordered hover size="sm">
                        
                        <tbody>
                            <tr>
                                <td><strong>Codigo : </strong></td>
                                <td>{endow.element.codigo}</td>
                            </tr>
                            <tr>
                                <td><strong>Nombre dotación : </strong></td>
                                <td>{endow.element.nombre}</td>
                            </tr>
                            <tr>
                                <td><strong>Tipo : </strong></td>
                                <td>{endow.element.tipo}</td>
                            </tr>
                            <tr>
                                <td><strong>Sistema operativo : </strong></td>
                                <td>{endow.element.sistema_operativo}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <AssignForm endow = {endow} handleClose = {handleClose} />
                </Modal.Body>
            </Modal>
        </>
    );
  }
    