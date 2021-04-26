import React from "react";
import Aux from "../../hoc/Auxiliary";
import Classes from './Layout.module.css';
import Toolbar from "../Navigation/Tollbar/Tollbar"

const layout = (props) => (
  <Aux>
    <Toolbar />
    <main className={Classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
