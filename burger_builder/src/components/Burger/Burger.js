import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
  let burgerIngredient = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, index) => {
        return <BurgerIngredient key={igKey + index} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
    if(burgerIngredient.length  === 0){
        burgerIngredient = <p>please start adding ingredients</p>;
    }
  // console.log(Ingredient);
  //     Ingredient.forEach(([key,value],index) =>  {
  //     for(let i=1;i<=value;i++){
  //         burgerIngredient = <BurgerIngredient key={index} type={key}/>
  //     }
  // })
  console.log(burgerIngredient);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {burgerIngredient}
      <BurgerIngredient type="bread-bottm" />
    </div>
  );
};

export default Burger;
