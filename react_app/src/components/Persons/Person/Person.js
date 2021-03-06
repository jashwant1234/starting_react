import React,{useContext} from "react";
import classes from'./Person.css';
// import styled from "styled-components";
// import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Aux from "../../../hoc/Auxiliary";
import WithClass from "../../../hoc/WithClass";
import AuthContext from '../../../context/auth-context';

const person = (props) => {
  const authContext = useContext(AuthContext);
  return (
    // <React.Fragment>
    <WithClass classes={classes.Person}>
      {authContext.authenticated ? <p>Login</p> : <p> please Login</p>}
      <p onClick={props.click}>
        My name is {props.name} and I am {props.age} Year old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} value={props.name}></input>
      </WithClass>
      // </React.Fragment> 
  );
};

export default person;
