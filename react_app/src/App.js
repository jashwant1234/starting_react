import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {name : "ashuthos" , age : "20"},
      {name : "sambit" , age : "22"},
      {name : "jashwant" , age : "21"}
    ]
  }
  render(){
    return (
      <div className="App">
        <h1>Hi i am Jaswwant.</h1>
        <button>Click</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>I love to play criciket .</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
