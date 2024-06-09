// components/Calculator.js
"use client"
import { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult(null);
  };

  const sanitizeInput = (input) => {
    // Remove leading zeros
    return input.replace(/\b0+(\d)/g, '$1');
  };

  const handleCalculate = () => {
    try {
      const sanitizedInput = sanitizeInput(input);
      setResult(eval(sanitizedInput));
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="border p-5 rounded-lg max-w-xs mx-auto bg-gray-800 text-white">
      <div className="flex flex-col items-end mb-4">
        <input type="text" value={input} readOnly className="w-full p-2 text-lg mb-2 bg-gray-900 text-white" />
        <div className="text-2xl text-gray-400">{result !== null ? `= ${result}` : ''}</div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.', '+', '-', '*', '/', 'C', '='].map((char) => (
          <button
            key={char}
            className={`p-4 text-lg rounded ${
              char === 'C' ? 'bg-red-500 hover:bg-red-600' :
              char === '=' ? 'col-span-4 bg-green-500 hover:bg-green-600' :
              'bg-gray-700 hover:bg-gray-600'
            }`}
            onClick={() => {
              if (char === 'C') return handleClear();
              if (char === '=') return handleCalculate();
              return handleClick(char);
            }}
          >
            {char}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
