import React from 'react';

const UserInput = (props) => {
  
  const userInputStyle = {
    'margin-top': '40px',
    border: '2px solid blue',
    height: '20px',
    width: '150px'
  };

  return (
    <div>
      <input  
        type="text" 
        style={userInputStyle}
        onChange={props.textInput} 
        value={props.currentName}></input>
    </div>
  );
}

export default UserInput;
