import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { Spinner } from "react-bootstrap";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
  state = {
    Orders: [],
    loading: true,
  };
  componentDidMount() {
    axios
      .get("/orders.json")
      .then((res) => {
        const orders = [];
        for (let key in res.data) {
          orders.push({id:key, ...res.data[key]});
        }
        console.log(orders,"orders");
        this.setState({ Orders: orders, loading: false });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }
  render() {
    let order;
    if (this.state.loading) {
      order = <Spinner animation="grow" />;
    }
    order = this.state.Orders.map((order) => {
      return (
        <Order
          key={order.id}
          price={order.totalPrice}
          ingredients={order.ingredients}
        />
      );
    });
    return (<div>{order}</div>);
  }
}
export default withErrorHandler(Orders, axios);
