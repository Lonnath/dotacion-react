import React from 'react'
import Index from './components/index_view/IndexComponent.jsx'
export default function App() {
    document.title = "Index";
    return (
        <div className="App" id="body">
            <Index/>            
        </div>
    );
}