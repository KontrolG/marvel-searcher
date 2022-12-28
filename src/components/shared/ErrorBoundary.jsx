import React, { Component } from "react";
import PropTypes from "prop-types";
import Message from "./Message";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;
    const errorMessage =
      import.meta.env.MODE === "production" || !error
        ? "Algo salio mal. Por favor, intenta nuevamente."
        : error.toString();

    return error ? (
      <Message message={errorMessage} type="system-error" />
    ) : (
      <>{children}</>
    );
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
};

export default ErrorBoundary;
