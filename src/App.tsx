import React, { useState } from 'react';

interface CalculatorState {
  currentExpression: string;
  previousExpressions: string[];
  result: string;
}

const Calculator: React.FC = () => {
  const [state, setState] = useState<CalculatorState>({
    currentExpression: '',
    previousExpressions: [],
    result: '',
  });

  const handleButtonClick = (buttonValue: string) => {
    if (buttonValue === 'C') {
      setState({
        currentExpression: '',
        previousExpressions: [],
        result: '',
      });
    } else if (buttonValue === 'DEL') {
      setState({
        currentExpression: state.currentExpression.slice(0, -1),
        previousExpressions: state.previousExpressions,
        result: state.result,
      });
    } else if (buttonValue === 'Ans') {
      setState({
        currentExpression: state.currentExpression + state.result,
        previousExpressions: state.previousExpressions,
        result: state.result,
      });
    } else if (buttonValue === '=') {
      try {
        const result = eval(state.currentExpression);
        setState({
          currentExpression: '',
          previousExpressions: [...state.previousExpressions, state.currentExpression],
          result: result.toString(),
        });
      } catch (error) {
        setState({
          currentExpression: '',
          previousExpressions: [...state.previousExpressions, state.currentExpression],
          result: 'Error',
        });
      }
    } else {
      setState({
        currentExpression: state.currentExpression + buttonValue,
        previousExpressions: state.previousExpressions,
        result: state.result,
      });
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-md shadow-md">
      <div className="flex flex-col">
        <div className="flex-1 p-2 overflow-y-auto">
          {state.previousExpressions.map((expression, index) => (
            <div key={index} className="text-sm text-gray-600">
              {expression} = {state.result}
            </div>
          ))}
        </div>
        <input
          type="text"
          value={state.currentExpression}
          className="w-full p-2 text-lg text-right border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          readOnly
        />
      </div>
      <div className="grid grid-cols-4 gap-2 mt-4">
        <button
          className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring focus:border-blue-500"
          onClick={() => handleButtonClick('7')}
        >
          7
        </button>
        <button
          className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring focus:border-blue-500"
          onClick={() => handleButtonClick('8')}
        >
          8
        </button>
        <button
          className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring focus:border-blue-500"
          onClick={() => handleButtonClick('9')}
        >
          9
        </button>
        <button
          className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring focus:border-blue-500"
          onClick={() => handleButtonClick('/')}
        >
          /
        </button>
        <button
          className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring focus:border-blue-500"
          onClick={() => handleButtonClick('4')}
        >
          4
        </button>
        <button
          className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring focus:border-blue-500"
          onClick={() => handleButtonClick('5')}
        >
          5
        </button>
        <button
          className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring focus:border-blue-500"
          onClick={() => handleButtonClick('6')}
        >
          6
        </button>
        <button
          className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring focus:border-blue-500"
          onClick={() => handleButtonClick('*')}
        >
          *
        </button>
        <button
          className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring focus:border-blue-500"
          onClick={() => handleButtonClick('1')}
        >
          1
        </button>
        <button
          className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring focus:border-blue-500"
          onClick={() => handleButtonClick('2')}
        >
          2
        </button>
        <button
          className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring focus:border-blue-500"
          onClick={() => handleButtonClick('3')}
        >
          3
        </button>
        <button
          className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring focus:border-blue-500"
          onClick={() => handleButtonClick('-')}
        >
          -
        </button>
        <button
          className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring focus:border-blue-500"
          onClick={() => handleButtonClick('0')}
        >
          0
        </button>
        <button
          className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring focus:border-blue-500"
          onClick={() => handleButtonClick('.')}
        >
          .
        </button>
        <button
          className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring focus:border-blue-500"
          onClick={() => handleButtonClick('Ans')}
        >
          Ans
        </button>
        <button
          className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring focus:border-blue-500"
          onClick={() => handleButtonClick('+')}
        >
          +
        </button>
        <button
          className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring focus:border-blue-500"
          onClick={() => handleButtonClick('DEL')}
        >
          DEL
        </button>
        <button
          className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring focus:border-blue-500"
          onClick={() => handleButtonClick('C')}
        >
          C
        </button>
        <button
          className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-500"
          onClick={() => handleButtonClick('=')}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;