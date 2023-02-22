import React, { useState } from 'react';

function RadioWithLabel(props) {
  const [selectedOption, setSelectedOption] = useState(props.options[0]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const radioStyle = {
    backgroundColor: 'white',
    borderRadius: '50%',
    width: '1.2em',
    height: '1.2em',
    display: 'inline-block',
    verticalAlign: 'middle',
    marginRight: '0.5em',
    position: 'relative',
    border: '2px solid #ff55ee',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
  };

  const optionStyle = {
    marginRight: '1em',
  };

  return (
    <div className='radio-with-label' style={containerStyle}>
      {props.options.map((option, index) => {
        const radioDotStyle = {
          backgroundColor: '#ff55ee',
          borderRadius: '50%',
          width: '0.5em',
          height: '0.5em',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: selectedOption === option ? 'block' : 'none',
        };
        return (
          <div key={index} style={optionStyle}>
            <label style={{ display: 'inline-block' }}>
              <span style={radioStyle}>
                <input
                  type='radio'
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                  style={{ display: 'none' }}
                />
                <span style={radioDotStyle}></span>
              </span>
              {option}
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default RadioWithLabel;
