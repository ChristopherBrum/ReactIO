import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
  return(
    <div>
      <p>Hello there World, my name is {props.userName},</p>
      <p>and I'm trying to figure out React</p>
    </div>
  );
}

export default UserOutput