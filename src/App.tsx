import React, { useState } from 'react';
import './App.css';

function App() {

  // Array to store and keep on adding the user input
  const [rainData, setRainData] = useState<any>([])
  // The model value for textarea
  const [inputValue, setInputValue] = useState('');

  const updateBox = (e: any) => {
    const newChar = e.target.value.slice(-1).trim();
    setInputValue(e.target.value);
    addRainDrop(newChar);
  };

  // Function to add new user input to array 
  const addRainDrop = (char: any) => {
    const newRainDrop = {
      char,

      // Random position across y axis on top of the page
      x: Math.random() * window.innerWidth
    };

    setRainData((prevRain: any) => [...prevRain, newRainDrop]);
  };

  return (
    <div className="App">
      <div className="rain-container">
        {rainData.map((drop: any, index: any) => (
          <span
            key={index}
            className="char"
            data-char={drop.char}
            style={{
              top: '0px',
              left: `${drop.x}px`
            }}
          >
            {drop.char}
          </span>
        ))}
      </div>
      <div className="textarea-container">
        <textarea value={inputValue} onChange={updateBox}/> 
      </div>
    </div>
  );
}

export default App;
