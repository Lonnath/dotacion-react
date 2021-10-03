import React, {useState} from 'react'
import {Button, Modal, Table} from 'react-bootstrap'
export default function ViewEndow ({endow}){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (<>
        <Button variant="outline-info" className="w-100" onClick={handleShow}>
          Ver
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
                  <td>{endow.codigo}</td>
                </tr>
                <tr>
                  <td><strong>Nombre dotación : </strong></td>
                  <td>{endow.nombre}</td>
                </tr>
                <tr>
                  <td><strong>Tipo : </strong></td>
                  <td>{endow.tipo}</td>
                </tr>
                <tr>
                  <td><strong>Sistema operativo : </strong></td>
                  <td>{endow.sistema_operativo}</td>
                </tr>
                <tr>
                  <td><strong>Fecha de asignación : </strong></td>
                  <td>{endow.fecha_asignado}</td>
                </tr>
                <tr>
                  <td><strong>Empleado : </strong></td>
                  <td>{endow.empleado_asignado}</td>
                </tr>
                <tr>
                  <td><strong>Email de empleado : </strong></td>
                  <td>{endow.empleado_email}</td>
                </tr>
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
    