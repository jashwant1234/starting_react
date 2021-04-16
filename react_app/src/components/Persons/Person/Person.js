import React from "react";
import classes from'./Person.css';
// import styled from "styled-components";
// import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const person = (props) => {
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        My name is {props.name} and I am {props.age} Year old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} value={props.name}></input>
     </div>
  );
};

export default person;
