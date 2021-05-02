import React from "react";
// import PropTypes from 'prop-types'
import "bootstrap/dist/css/bootstrap.css";
import Burger from "../../Burger/Burger";

const CheckoutSummary = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Here your Burger is check it</h1>
      <Burger ingredients={props.ingredients} />
      <button
        type="button"
        className="btn btn-danger"
        onClick={props.checkoutCancelled}
      >
        CANCEL
      </button>
      &nbsp;
      <button
        type="button"
        className="btn btn-success"
        onClick={props.checkoutContinue}
      >
        CONTINUE
      </button>
    </div>
  );
};

// CheckoutSummary.propTypes = {

// }

export default CheckoutSummary;
