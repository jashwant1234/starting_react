import React, { Component } from "react";
import { Route,withRouter } from "react-router-dom";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
 class Checkout extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  state = {
    ingredients: this.props.location.state.ingredients,
    totalPrice: this.props.location.state.totalPrice,
  };

  
  checkoutCancelledHandler = () => {
    // this.setState({ingredients:null});
    this.props.history.goBack();
  };
  checkoutContinueHandler = () => {
    this.props.history.replace("/Checkout/contact-data");
  };
  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinue={this.checkoutContinueHandler}
        />
        <Route
          path={this.props.match.url + "/contact-data"}
          render={() => (
            <ContactData
              ingredients={this.state.ingredients}
              totalPrice={this.state.totalPrice}
            />
          )}
        />
      </div>
    );
  }
}
export default Checkout;