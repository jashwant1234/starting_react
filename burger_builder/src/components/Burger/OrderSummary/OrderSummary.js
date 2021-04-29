import React, { Component } from "react";
import Aux from "../../../hoc/Auxiliary";
import "bootstrap/dist/css/bootstrap.css";

class OrderSummary extends Component {
    componentDidUpdate(){
        console.log("[orderSummary will update]");
    }
  render() {
    let ingredientSummary = [];
    Object.entries(this.props.ingredients).forEach(([key, value], index) => {
      ingredientSummary = [
        ...ingredientSummary,
        <li key={index}>
          <span style={{ textTransform: "capitalize" }}>{key}</span> :{value}
        </li>,
      ];
    });
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients: </p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price : {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <button
          type="button"
          className="btn btn-danger"
          onClick={this.props.purchaseCancel}
        >
          CANCEL
        </button>
        &nbsp;
        <button
          type="button"
          className="btn btn-success"
          onClick={this.props.purchaseContinue}
        >
          CONTINUE
        </button>
      </Aux>
    );
  }
}

export default OrderSummary;
