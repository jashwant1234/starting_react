import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControles/BuildControles";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.6,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchasable: false,
  };

  updatePurchaseState(ingredients) {
    const sum = Object.values(ingredients).reduce(
      (sum1, value) => sum1 + value,
      0
    );
    console.log(sum);
    this.setState({purchasable:sum>0})
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

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
