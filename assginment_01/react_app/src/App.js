import React, { Component } from "react";
import "./App.css";
import userInput from "./UserInput/userInput";
import UserInput from "./UserInput/userInput";
import UseOutput from "./UserOutput/userOutput";
class App extends Component {
  state = {
    userName: "jashwant",
  };
  updateUserName = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };
  render() {
    return (
      <div className="App">
        <UserInput userName={this.state.userName} updateUserName={this.updateUserName}/>
        <UseOutput userName={this.state.userName} />
        <UseOutput userName={this.state.userName} />
        <UseOutput userName={this.state.userName} />
      </div>
    );
  }
}

export default App;
