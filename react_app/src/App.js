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
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi i am Jaswwant.</h1>
        <button onClick={this.togglePerson}>Show Person</button>
        { this.state.showPersons ? 
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this,"jashwant!!!!")}
            change = {this.nameChangeHandler}
          >
            I love to play criciket .
          </Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[  1].age}
          />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div> : null 
        }
      </div>
    );
  }
}

export default App;
