import React, { useState, useEffect } from 'react';
import './keyboard.css';

function Keyboard({ onLetterClick, gameState }) {

  const alphabet = 'AZERTYUIOPQSDFGHJKLMWXCVBNéè-'.split('');
  const [disabledKeys, setDisabledKeys] = useState([]);


  useEffect(() => {
    setDisabledKeys([]);
  }, [gameState]);


  const handleClick = (letter) => {

    onLetterClick(letter);


    setDisabledKeys([...disabledKeys, letter]);
  };

  return (
    <div className="keyboard">
      {alphabet.map((letter, index) => (
        <button 
          key={index} 
          onClick={() => handleClick(letter)} 
          disabled={disabledKeys.includes(letter)} 
        >
          {letter}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;
