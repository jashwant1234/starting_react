import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  
  state = {
    persons: [
      { name: "ashuthos", age: "20" },
      { name: "sambit", age: "22" },
      { name: "jashwant", age: "21" },
    ],
    showPersons : false,
  };
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: "20" },
        { name: "sambit!", age: "22" }, 
        { name: "jashwant!", age: "21" },
      ],
    });
  };

  nameChangeHandler = (event) =>{
    this.setState({
      persons: [
        { name: event.target.value, age: "20" },
        { name: "ashuthos", age: "22" },
        { name: "jashwant!", age: "21" },
      ],
    });
  };
  togglePerson = () =>{
    this.setState({
      showPersons : ! this.state.showPersons
    });
  };

  render() {
    let person = null;

    if(this.state.showPersons){
      person = (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age} />
          }) }
      </div>
      )
    }
    return (
      <div className="App">
        <h1>Hi i am Jaswwant.</h1>
        <button onClick={this.togglePerson}>Show Person</button>
        {person}
      </div>
    );
  }
}

export default App;
