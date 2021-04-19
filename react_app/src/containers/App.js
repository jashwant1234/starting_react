import React, { PureComponent } from "react";
import classes from "./App.css";
// import styled from 'styled-components';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import WithClass from "../hoc/WithClass";
import AuthContext from "../context/auth-context";

class App extends PureComponent {
  state = {
    persons: [
      { id: "adgadf", name: "ashuthos", age: "20" },
      { id: "adgasdcf", name: "sambit", age: "22" },
      { id: "adadfbvdf", name: "jashwant", age: "21" },
    ],
    showPersons: false,
    changeCounter: 0,
    login : false
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
    this.setState((prevState, props) => {
      return { persons: persons, changeCounter: prevState.changeCounter + 1 };
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

  loginHandler = () =>{
    this.setState({login: !this.state.login})
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

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

    <AuthContext.Provider value={{authenticated:this.state.login , login : this.loginHandler}}>
      <WithClass classes={classes.App}>
        <Cockpit
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          togglePerson={this.togglePerson}
        />
        {person}
      </WithClass>
    </AuthContext.Provider>
    );
  }
}

export default App;
