import React, { useState } from "react";
import "./styles.css";

function App() {
  const [previousOperand, setPreviousOperand] = useState("");
  const [currentOperand, setCurrentOperand] = useState("");
  const [operation, setOperation] = useState("");

  // Function to handle button clicks
  const handleButtonClick = (value) => {
    if (value === "AC") {
      // Clear everything
      setPreviousOperand("");
      setCurrentOperand("");
      setOperation("");
    } else if (value === "DEL") {
      // Delete the last character
      setCurrentOperand(currentOperand.slice(0, -1));
    } else if (/[0-9]/.test(value)) {
      // Handle digit input
      setCurrentOperand(currentOperand + value);
    } else if (value === ".") {
      // Handle decimal point input
      if (!currentOperand.includes(".")) {
        setCurrentOperand(currentOperand + ".");
      }
    } else if (["+", "-", "*", "/"].includes(value)) {
      // Handle operation input
      if (currentOperand !== "") {
        setPreviousOperand(currentOperand);
        setCurrentOperand("");
        setOperation(value);
      }
    } else if (value === "=") {
      // Handle equals button
      if (previousOperand !== "" && currentOperand !== "") {
        let result;
        switch (operation) {
          case "+":
            result = parseFloat(previousOperand) + parseFloat(currentOperand);
            break;
          case "-":
            result = parseFloat(previousOperand) - parseFloat(currentOperand);
            break;
          case "*":
            result = parseFloat(previousOperand) * parseFloat(currentOperand);
            break;
          case "/":
            result = parseFloat(previousOperand) / parseFloat(currentOperand);
            break;
          default:
            return;
        }
        setPreviousOperand("");
        setCurrentOperand(result.toString());
        setOperation("");
      }
    }
  };

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{previousOperand}</div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button className="span-two" onClick={() => handleButtonClick("AC")}>
        AC
      </button>
      <button onClick={() => handleButtonClick("DEL")}>DEL</button>
      <button onClick={() => handleButtonClick("/")}>÷</button>
      <button onClick={() => handleButtonClick("1")}>1</button>
      <button onClick={() => handleButtonClick("2")}>2</button>
      <button onClick={() => handleButtonClick("3")}>3</button>
      <button onClick={() => handleButtonClick("*")}>*</button>
      <button onClick={() => handleButtonClick("4")}>4</button>
      <button onClick={() => handleButtonClick("5")}>5</button>
      <button onClick={() => handleButtonClick("6")}>6</button>
      <button onClick={() => handleButtonClick("+")}>+</button>
      <button onClick={() => handleButtonClick("7")}>7</button>
      <button onClick={() => handleButtonClick("8")}>8</button>
      <button onClick={() => handleButtonClick("9")}>9</button>
      <button onClick={() => handleButtonClick("-")}>-</button>
      <button onClick={() => handleButtonClick(".")}>.</button>
      <button onClick={() => handleButtonClick("0")}>0</button>
      <button className="span-two" onClick={() => handleButtonClick("=")}>
        =
      </button>
    </div>
  );
}

export default App;
