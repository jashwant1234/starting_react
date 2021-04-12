import React, { Component } from 'react';
import './App.css';
import Validation from './validation/validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    text : "",
    textLen : 0
  }
  
  enterdTextLength = (event) =>{
    const str = event.target.value ;
    const len = str.length
    this.setState({
      text : str,
      textLen : len
    })
  }

  deleteCharacter = (index) => {
    //console.log(index);
     let str = this.state.text.split('');
    str.splice(index,1);
    // console.log(str);
     str = str.join('');
     //console.log(str);
    this.setState({
      text:str,
      textLen:str.length
    })
  }
  
  render() {
    const charList = this.state.text.split('').map( (ch ,index) => {
      return <Char character={ch}
      //key = {index}
      click = {() => this.deleteCharacter(index)}
      />
    })
    return (
      <div className="App">
        <p>The text is: {this.state.text} and  the lenght is : {this.state.textLen}</p>
        <Validation len = {this.state.textLen}/>
        {charList}
        <input type="text" onChange={this.enterdTextLength} value={this.state.text}></input>
      </div>
    );
  }
}

export default App;
