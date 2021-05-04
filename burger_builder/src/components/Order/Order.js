import { object } from "prop-types";
import React from "react";
// import PropTypes from 'prop-types'
import classes from "./Order.module.css";
function Order(props) {
  // const ingredients = [];
  // for(let i in  props.ingredients) {
  //     ingredients.push({name: i,amount: props.ingredients[i]});
  // }

  // const ingredientsOutput=ingredients.map(ig =>{
  //     return <span style={{
        //   textTransform: "uppercase",
        //   display: "inline-block",
        //   margin: "0 8px",
        //   border: "1px solid #ccc",
        //   padding: "5px",
        // }}>{ig.name}({ig.amount})</span>
  // })

  //alter nativ way
  let ingredientsOutput = [];
  for (let key of Object.keys(props.ingredients)) {
    ingredientsOutput = [
      ...ingredientsOutput,
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px",
        }}
      >
        {key}({props.ingredients[key]})
      </span>,
    ];
  }

  return (
    <div className={classes.Order}>
      <p>Ingredients : {ingredientsOutput}</p>
      <p>
        Price:<strong>{props.price.toFixed(2)}</strong>
      </p>
    </div>
  );
}

// Order.propTypes = {

// }

export default Order;
