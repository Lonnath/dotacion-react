import React, {useState} from 'react'
import {Button, Modal, Table} from 'react-bootstrap'
export default function VerDotacion ({dotacion}){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (<>
        <Button variant="outline-success" onClick={handleShow}>
          Ver
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
                  <td><strong>Fecha de asignación : </strong></td>
                  <td>{dotacion.fecha_asignado}</td>
                </tr>
                <tr>
                  <td><strong>Empleado : </strong></td>
                  <td>{dotacion.empleado_asignado}</td>
                </tr>
                <tr>
                  <td><strong>Email de empleado : </strong></td>
                  <td>{dotacion.empleado_email}</td>
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
    