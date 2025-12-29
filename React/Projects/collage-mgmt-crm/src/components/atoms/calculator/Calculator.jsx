import { Calculate } from '@mui/icons-material';
import { useState } from 'react';

const Calculator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    try {
      const calculationResult = eval(input);
      setResult(calculationResult);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
      >
        <Calculate className="h-5 w-5" />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 p-4 z-10">
          <div className="text-sm font-medium text-gray-700 mb-2">Calculator</div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2"
            placeholder="e.g., 2+2*3"
          />
          <div className="flex justify-between mb-2">
            <button onClick={() => setInput(input + '7')} className="p-2 w-10 h-10 bg-gray-100 rounded">7</button>
            <button onClick={() => setInput(input + '8')} className="p-2 w-10 h-10 bg-gray-100 rounded">8</button>
            <button onClick={() => setInput(input + '9')} className="p-2 w-10 h-10 bg-gray-100 rounded">9</button>
            <button onClick={() => setInput(input + '/')} className="p-2 w-10 h-10 bg-blue-100 rounded">/</button>
          </div>
          <div className="flex justify-between mb-2">
            <button onClick={() => setInput(input + '4')} className="p-2 w-10 h-10 bg-gray-100 rounded">4</button>
            <button onClick={() => setInput(input + '5')} className="p-2 w-10 h-10 bg-gray-100 rounded">5</button>
            <button onClick={() => setInput(input + '6')} className="p-2 w-10 h-10 bg-gray-100 rounded">6</button>
            <button onClick={() => setInput(input + '*')} className="p-2 w-10 h-10 bg-blue-100 rounded">*</button>
          </div>
          <div className="flex justify-between mb-2">
            <button onClick={() => setInput(input + '1')} className="p-2 w-10 h-10 bg-gray-100 rounded">1</button>
            <button onClick={() => setInput(input + '2')} className="p-2 w-10 h-10 bg-gray-100 rounded">2</button>
            <button onClick={() => setInput(input + '3')} className="p-2 w-10 h-10 bg-gray-100 rounded">3</button>
            <button onClick={() => setInput(input + '-')} className="p-2 w-10 h-10 bg-blue-100 rounded">-</button>
          </div>
          <div className="flex justify-between mb-2">
            <button onClick={() => setInput('')} className="p-2 w-10 h-10 bg-red-100 rounded">C</button>
            <button onClick={() => setInput(input + '0')} className="p-2 w-10 h-10 bg-gray-100 rounded">0</button>
            <button onClick={handleCalculate} className="p-2 w-10 h-10 bg-green-100 rounded">=</button>
            <button onClick={() => setInput(input + '+')} className="p-2 w-10 h-10 bg-blue-100 rounded">+</button>
          </div>
          {result && (
            <div className="mt-2 p-2 bg-gray-50 rounded-md">
              <span className="text-sm font-medium">Result: </span>
              <span className="text-sm">{result}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Calculator;