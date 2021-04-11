import React, { Component } from 'react';
import './App.css';
import userInput from './UserInput/userInput';
import UserInput from './UserInput/userInput';
import UseOutput from './UserOutput/userOutput';
class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput />
        <UseOutput userName="jashwant"/>
        <UseOutput userName="jashwant"/>
        <UseOutput userName="jashwant"/>
      </div>
    );
  }
}

export default App;
