import React, { Component } from "react";
import classes from "./App.css";
// import styled from 'styled-components';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Person from "../components/Persons/Person/Person";

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
    const assigned = [];
    let btnclass = '';

    if (this.state.persons.length <= 2) assigned.push(classes.red);
    if (this.state.persons.length <= 1) assigned.push(classes.bold);

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
        btnclass = classes.Red;
    }
    // console.log(btnclass.join(' '));
    return (
      <div className={classes.App}>
        <p className={assigned.join(" ")}>Hi i am Jaswwant.</p>
        <button className = {btnclass} onClick={this.togglePerson}>
          Show Person
        </button>
        {person}
      </div>
    );
  }
}

export default App;
