import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    username: 'Butthole Sandwich',
  }
  
  changeWithInput = (event) => {
    this.setState({username: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <UserInput 
          textInput={this.changeWithInput} 
          currentName={this.state.username}/>
        <UserOutput userName="Christopher" />
        <UserOutput userName={this.state.username} />
      </div>
    );
  }
}

export default App;
