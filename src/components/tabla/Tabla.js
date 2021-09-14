import React from 'react'
import {Table} from 'react-bootstrap'
import ProccessTable from './VerDotacion.jsx'
import AsignarDotacion from './AsignarDotacion.jsx'
export default function Tabla({dotaciones, consulta}){
    
    return(
        <div>
            <Table striped responsive bordered hover variant="dark" className="tabla-disen">
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Nombre</th>
                        <th>Tipo</th>
                        <th>Sistema Operativo</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    { dotaciones && dotaciones.length >= 1 ? dotaciones.map((elemento) => { 
                        return  <tr className="fila" key={elemento.codigo}> 
                                    <td>{elemento.codigo}</td>
                                    <td>{elemento.nombre}</td>
                                    <td>{elemento.tipo}</td>
                                    <td>{elemento.sistema_operativo}</td>
                                    <td className="d-flex justify-content-center">{elemento.fecha_asignado ===null ? <AsignarDotacion dotacion={elemento}/>: <ProccessTable dotacion={elemento}/> }</td>
                                </tr>
                    }):<tr><td></td></tr>} 
                </tbody>
            </Table>
        </div>
    )
}