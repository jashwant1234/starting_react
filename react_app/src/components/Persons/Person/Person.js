import React from "react";
import classes from'./Person.css';
// import styled from "styled-components";
// import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Aux from "../../../hoc/Auxiliary";

const person = (props) => {
  return (
    // <React.Fragment>
    <Aux>
      <p onClick={props.click}>
        My name is {props.name} and I am {props.age} Year old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} value={props.name}></input>
      </Aux>
     /* </React.Fragment> */
  );
};

export default person;
