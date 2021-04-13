import React from 'react';
import Radium from "radium";
import './Person.css'

const person = (props) => {
    return (
    <div className="Person">
        <p onClick={props.click}>My name is {props.name} and I am {props.age} Year old.</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.change} value={props.name}></input>
    </div>
    );
};

export default Radium(person) ;