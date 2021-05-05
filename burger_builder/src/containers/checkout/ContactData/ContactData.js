import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Button,
  Form,
  Spinner,
  InputGroup,
  Col,
  Jumbotron,
} from "react-bootstrap";
// import Aux from "../../../hoc/Auxiliary";
import Classes from "./ContactData.module.css";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";

class ContactData extends Component {
  state = {
    orderForm: {
      firstName: "",
      lastName: "",
      city: "",
      zip: "",
      state: "",
      email: "",
      deliveryMethod: "",
      terms: false,
    },
};

  componentDidMount() {
    console.log(this.props);
  }

 

  render() {
    const schema = yup.object().shape({
      firstName: yup
        .string()
        .required()
        .max(15, "firstName not grater then 15")
        .min(3, "not less then 3"),
      lastName: yup.string().required(),
      email: yup.string().required().email("It most be a Email"),
      city: yup.string().required(),
      state: yup.string().required(),
      zip: yup.string().required(),
      deliveryMethod: yup.string().required(),
      terms: yup.bool().required().oneOf([true], "terms must be accepted"),
    });

    let form = (
      <Formik
        initialValues={{
          firstName: this.state.orderForm.firstName,
          lastName: this.state.orderForm.lastName,
          email: this.state.orderForm.email,
          city: this.state.orderForm.city,
          state: this.state.orderForm.state,
          zip: this.state.orderForm.zip,
          deliveryMethod: this.state.orderForm.deliveryMethod,
          terms: this.state.orderForm.terms,
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          const data = {
            ingredients: this.props.ingredients,
            totalPrice: this.props.totalPrice,
            address:values
          };
          console.log(data);
          axios
            .post("/orders.json", data)
            .then((res) => {
              console.log(res);
              this.props.history.push("/");
            })
            .catch((err) => {
              console.log(err);
            });
      }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
          isSubmitting,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationFormik101">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
                  isInvalid={touched.firstName && errors.firstName}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.firstName}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationFormik102">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  isValid={touched.lastName && !errors.lastName}
                  isInvalid={touched.lastName && errors.lastName}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.lastName}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationFormik103">
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Prepend>
                    <InputGroup.Text>@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isValid={touched.email && !errors.email}
                    isInvalid={touched.email && errors.email}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.email}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationFormik104">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  isValid={touched.city && !errors.city}
                  isInvalid={touched.city && errors.city}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.city}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationFormik105">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                  isValid={touched.state && !errors.state}
                  isInvalid={touched.state && errors.state}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.state}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationFormik106">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  type="text"
                  name="zip"
                  value={values.zip}
                  onChange={handleChange}
                  isValid={touched.zip && !errors.zip}
                  isInvalid={touched.zip && errors.zip}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.zip}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationFormik107">
                <Form.Label>Select the Delivery Method</Form.Label>
                <Form.Control
                  as="select"
                  custom
                  name="deliveryMethod"
                  value={values.deliveryMethod}
                  onChange={handleChange}
                  isValid={touched.deliveryMethod && !errors.deliveryMethod}
                  isInvalid={touched.deliveryMethod && errors.deliveryMethod}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Group>
              <Form.Check
                required
                name="terms"
                label="Agree to terms and conditions"
                onChange={handleChange}
                isInvalid={!!errors.terms}
                feedback={errors.terms}
                id="validationFormik106"
                feedbackTooltip
              />
            </Form.Group>
            <Button type="submit" size="lg" >
              {isSubmitting ? "Loading..." : "Submit"}
            </Button>
          </Form>
        )}
      </Formik>
    );

    if (this.state.loading) {
      form = <Spinner animation="grow" />;
    }
    return (
      <div className={Classes.Content}>
        <Jumbotron>
          <h4>Enter your Contact Data</h4>
          {form}
        </Jumbotron>
      </div>
    );
  }
}
export default withRouter(ContactData);
