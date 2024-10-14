// src/App.js
import React from 'react';
import Calculator from './components/Calculator';
import './App.css'; // Asegúrate de importar el CSS

function App() {
    return (
        <div className="App">
            <h1 className="calculator-title">Calculadora</h1>
            <Calculator />
        </div>
    );
}

export default App;
