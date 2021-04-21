import React from "react";
import BuildControle from "./BuildControle/BuildControle";
import classes from "./BuildControles.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

export default function BuildControles(props) {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map((ctrl) => {
        return (
          <BuildControle
            key={ctrl.label}
            label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
          />
        );
      })}
      <button className={classes.OrderButton}
      disabled={!props.purchasable}
      >ORDER NOW</button>
    </div>
  );
}
