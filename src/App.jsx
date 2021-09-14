import React, {useState, useEffect} from 'react'
import Cabecera from './components/cabecera/Cabecera'
import API from './servicios/Api'

export default function App() {
    
    const [dotaciones, setDotaciones] = useState([]);
    useEffect(() => {
        
        API.get("/api/dotacion").then((data) => {
            setDotaciones(data.data.DATA);
        })
        
    }, []);
    return (
        <div className="App" id="body">
            <Cabecera dotaciones={dotaciones}/>            
        </div>
    );
}