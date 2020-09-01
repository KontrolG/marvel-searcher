import React, { Component, Fragment } from "react";
import Message from "./Message";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    return hasError ? (
      <Message
        message="Algo salío mal. Por favor, intenta nuevamente."
        type="system-error"
      />
    ) : (
      <>{this.props.children}</>
    );
  }
}

export default ErrorBoundary;
