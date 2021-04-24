import React from 'react'
import Aux from '../../../hoc/Auxiliary';
import 'bootstrap/dist/css/bootstrap.css';

export default function OrderSummary(props) {
    let ingredientSummary = [];
     Object.entries(props.ingredients).forEach(([key, value],index) => {
        ingredientSummary =  [...ingredientSummary,<li key={index}><span style={{textTransform : 'capitalize'}}>{key}</span> :{value}</li>]
    })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <button type="button" className="btn btn-success" onClick={props.purchaseCancel}>CANCEL</button>
            &nbsp;
            <button type="button" className="btn btn-danger" onClick={props.purchaseContinue}>CONTINUE</button>
        </Aux>
    )
}
