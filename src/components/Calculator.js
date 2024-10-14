// src/components/Calculator.js
import React, { useState } from 'react';
import './Calculator.css'; // Importa el CSS para estilos

const Calculator = () => {
    const [input, setInput] = useState('');

    const appendToInput = (value) => {
        setInput((prevInput) => prevInput + value);
    };

    const clearInput = () => {
        setInput('');
    };

    const deleteLastCharacter = () => {
        setInput((prevInput) => prevInput.slice(0, -1));
    };

    const calculateResult = () => {
        try {
            setInput(eval(input).toString());
        } catch (error) {
            setInput('Error');
        }
    };

    return (
        <div className="calculator">
            <input type="text" value={input} readOnly />
            <div className="buttons">
                <button onClick={clearInput}>C</button>
                <button onClick={deleteLastCharacter}>←</button>
                <button onClick={() => appendToInput('/')}>÷</button>
                <button onClick={() => appendToInput('*')}>×</button>
                <button onClick={() => appendToInput('7')}>7</button>
                <button onClick={() => appendToInput('8')}>8</button>
                <button onClick={() => appendToInput('9')}>9</button>
                <button onClick={() => appendToInput('-')}>-</button>
                <button onClick={() => appendToInput('4')}>4</button>
                <button onClick={() => appendToInput('5')}>5</button>
                <button onClick={() => appendToInput('6')}>6</button>
                <button onClick={() => appendToInput('+')}>+</button>
                <button onClick={() => appendToInput('1')}>1</button>
                <button onClick={() => appendToInput('2')}>2</button>
                <button onClick={() => appendToInput('3')}>3</button>
                <button onClick={() => appendToInput('0')}>0</button>
                <button onClick={() => appendToInput('.')}>.</button>
                <button onClick={calculateResult}>=</button>
            </div>
   
        </div>
    );
};

export default Calculator;
