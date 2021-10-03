import React, {useState, useEffect} from 'react'
import {Table} from 'react-bootstrap'
import ViewEndow from './ViewEndow.jsx'
import AssignEndow from './AssignEndow.jsx'
export default function TableData({endow}){
    const [data] = useState(endow);
    const [act, setAct] = useState(false);
    const fntSetData = (pos, fecha_asignado, empleado_asignado, email_empleado) => {
        data[pos]['fecha_asignado'] = fecha_asignado;
        data[pos]['empleado_asignado'] = empleado_asignado;
        data[pos]['empleado_email'] = email_empleado;
        setAct(true);
    }
    useEffect(
        () => {
            if(act){
                setTimeout(() => {
                    document.title = "Index";
                    setAct(false);
                }, 500);   
            }
        }
    )
    const actView = (element, fntSetData, pos) => {
        return element.fecha_asignado === null ? <AssignEndow endow = {{element, fntSetData, pos}}/> : <ViewEndow endow={element}/>    
    }

    return(
        <div>
            <Table bordered striped responsive hover variant="dark" className="table-design">
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
                    {
                        data && data.length >= 1 
                        ? 
                            data.map(
                                (element) => { 
                                    const pos = data.indexOf(element);
                                    return( 
                                        <tr key={element.codigo}> 
                                            <td>{element.codigo}</td>
                                            <td>{element.nombre}</td>
                                            <td>{element.tipo}</td>
                                            <td>{element.sistema_operativo}</td>
                                            <td className="d-flex justify-content-center" >
                                                {
                                                    actView(element,fntSetData, pos)
                                                }
                                            </td>
                                        </tr>
                                    )
                                    }
                            )
                        :<tr><td colSpan="5" align="center">NO HAY DATOS PARA MOSTRAR</td></tr>
                    } 
                </tbody>
            </Table>
        </div>
    )
}