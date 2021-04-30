import React, { Component } from "react";
// import PropTypes from 'prop-types'
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Auxiliary";

function withErrorHandler(WrappedComponent,axios) {
  return class extends Component {
    state = {
      error: null,
    };

    componentWillMount() {
     this.reqinterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });

      this.resinterceptor = axios.interceptors.response.use(res => {
          return res;
      }, (err) => {
        this.setState({ error: err });
      });
    }
    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqinterceptor);
      axios.interceptors.response.eject(this.resinterceptor);
    }
    errorConfirmedHandler = () => {
      this.setState({ error: null });
    }

    render() {
      return (
        <Aux>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {" "}
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
}
// withErrorHandler.propTypes = {

// }

export default withErrorHandler;
