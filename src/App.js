import './App.css';
import React, { useState, useEffect } from 'react';



function App() {

  const [numberInput1, setNumberInput1] = useState('');
  const [numberInput2, setNumberInput2] = useState('');
  const [operationInput, setOperationInput] = useState('');
  const [result, setResult] = useState(0);

  useEffect(() => {
    console.log(result);
  }, [result]);

  const getNumber = (val) => {
    if (operationInput === '') {
      setNumberInput1(numberInput1 + val);
    } else {
      setNumberInput2(numberInput2 + val);
    };
    };

  const getOperation = (operation) => {
    setOperationInput(operationInput + operation);
  };  

  const getResult = () => {
    switch(operationInput) {
      case '+': setResult(Number(numberInput1) + Number(numberInput2))
      break;
      case '-': setResult(Number(numberInput1) - Number(numberInput2))
      break;
      case '*': setResult(Number(numberInput1) * Number(numberInput2))
      break;
      case '/': setResult(Number(numberInput1) / Number(numberInput2));
    };
  };

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operations = ['+', '-', '*', '/']

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">{result}</div>
        <div className="buttons">
          <div className="leftSide">
            <div id="enterButton" onClick={getResult}>ENTER</div>
            <div className="numbers">
              {numbers.map((val, key) => {
                return <div id="individualNumber" onClick={(() => getNumber(val))}>{val}</div>;
              })}
            </div>
          </div>
          <div className="rightSide">
            {operations.map((operation, key) => {
              return <div id="individualOperation" onClick={() => getOperation(operation)}>{operation}</div>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
