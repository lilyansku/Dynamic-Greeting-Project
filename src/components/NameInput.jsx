import React, { useState } from 'react';

const NameInput = ({ onNameChange }) => {
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
      onNameChange(event.target.value);
    };

    return (
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
      );
    };
    
    export default NameInput;