import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControles/BuildControles";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.6,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: null,
  };

  updatePurchaseState(ingredients) {
    const sum = Object.values(ingredients).reduce(
      (sum1, value) => sum1 + value,
      0
    );
    console.log(sum);
    this.setState({ purchasable: sum > 0 });
  }

  componentDidMount() {
    axios
      .get("/ingredients.json")
      .then((res) => {
        this.setState({ ingredients: res.data });
      })
      .catch((err) => {
        this.setState({ error: true });
      });
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const count = oldCount + 1;
    const updatedIngredient = { ...this.state.ingredients };
    updatedIngredient[type] = count;
    const priceAddtion = INGREDIENT_PRICES[type];
    this.setState({
      ingredients: updatedIngredient,
      totalPrice: this.state.totalPrice + priceAddtion,
    });
    this.updatePurchaseState(updatedIngredient);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    let count = 0;
    if (oldCount === 0) {
      return;
    } else {
      count = oldCount - 1;
      const updatedIngredient = { ...this.state.ingredients };
      updatedIngredient[type] = count;
      const priceRemoved = INGREDIENT_PRICES[type];
      this.setState({
        ingredients: updatedIngredient,
        totalPrice: this.state.totalPrice - priceRemoved,
      });
      this.updatePurchaseState(updatedIngredient);
    }
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.setState({ loading: true });
    const data = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "jashwant",
        addres: {
          sector: "A/206",
          zipcode: "0293482",
          country: "INDIA",
        },
        email: "jpradhan727@gmail.com",
      },
      deliveryMethod: "fastest",
    };

    axios
      .post("/orders.json", data)
      .then((res) => {
        this.setState({ loading: false, purchasing: false });
      })
      .catch((err) => {
        this.setState({ loading: false, purchasing: false });
      });
  };

  render() {
    let orderSummary = null;

    let burger = this.state.error ? (
      <p>Ingredient Can't be lodaed</p>
    ) : (
      <div style={{ align: "center" }}>
        {" "}
        <Spinner animation="border"></Spinner>
        {"  "}
        Loading...
      </div>
    );
    if (this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            price={this.state.totalPrice}
            ordered={this.purchaseHandler}
            purchasable={this.state.purchasable}
          />
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          purchaseCancel={this.purchaseCancelHandler}
          purchaseContinue={this.purchaseContinueHandler}
          price={this.state.totalPrice}
        />
      );
    }
    if (this.state.loading) {
      orderSummary = (
        <div style={{ align: "center" }}>
          {" "}
          <Spinner animation="border"></Spinner>
          {"  "}
          Loading...
        </div>
      );
    }
    // console.log(this.state.purchasing);
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder);
