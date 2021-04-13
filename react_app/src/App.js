import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "adgadf", name: "ashuthos", age: "20" },
      { id: "adgasdcf", name: "sambit", age: "22" },
      { id: "adadfbvdf", name: "jashwant", age: "21" },
    ],
    showPersons: false,
  };

  nameChangeHandler = (event, key) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === key;
    });
    const person = {
      ...this.state.persons[personIndex],
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons,
    });
  };
  togglePerson = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    });
  };

  deletePersonHandler = (index) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  render() {
    let person = null;

    const style = {
      backgroundColor : 'green',
      font : 'inherit',
      border : '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover' : {
        backgroundColor : 'lightgreen',
        color : 'black'
      }
    }

    const classes = [];

    if(this.state.persons.length <= 2)
      classes.push('red');
    if(this.state.persons.length <= 1)
      classes.push('bold');
    

    if (this.state.showPersons) {
      person = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                change={(event) => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor : 'salmon',
        color : 'black'
      }
    }
    
    return (
      <div className="App">
        <p className={classes.join(' ')}>Hi i am Jaswwant.</p>
        <button
         style = {style}
         onClick={this.togglePerson}>Show Person</button>
        {person}
      </div>
    );
  };
}

export default App;
