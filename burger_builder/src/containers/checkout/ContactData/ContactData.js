import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Form ,Spinner  } from "react-bootstrap";
// import Aux from "../../../hoc/Auxiliary";
import Classes from "./ContactData.module.css";
import axios from "axios";
import { withRouter } from "react-router-dom";
class ContactData extends Component {
  state = { 
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
    loading:false,
     purchasing: false 
  };
  componentDidMount() {
    console.log(this.props);
  }

  orderHandler = (event) => {
      console.log(this.props);
    this.setState({ loading: true });
    event.preventDefault();
    const data =
    {  
        ingredients : this.props.ingredients,
        totalPrice: this.props.totalPrice
    }
    console.log(data);
    axios
      .post("/orders.json", data)
      .then((res) => {
        this.setState({ loading: false, purchasing: false });
        this.props.history.push("/");
      })
      .catch((err) => {
        this.setState({ loading: false, purchasing: false });
      });
  };

  render() {
      let form = (
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.orderHandler}>
            Submit
          </Button>
        </Form>);
        if(this.state.loading){
            form = <Spinner animation="grow" />;
        }
    return (
        <div className={Classes.Content}>
             <h4>Enter your Contact Data</h4>
            {form}
        </div>

    );
  }
}
export default withRouter(ContactData);