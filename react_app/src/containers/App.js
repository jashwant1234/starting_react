import React, { Component } from "react";
import classes from "./App.css";
// import styled from 'styled-components';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component  {

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
    if (this.state.showPersons) {
      person = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
    }
    // console.log(btnclass.join(' '));
    return (
      <div className={classes.App}>
        <Cockpit
          persons = {this.state.persons}
          showPersons = {this.state.showPersons}
          togglePerson={this.togglePerson}
        />
        {person}
      </div>
    );
  }
}

export default App;
