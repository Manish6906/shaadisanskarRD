import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    // Update state to display fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log the error to an error reporting service
    console.error("Error caught in ErrorBoundary:", error);
    this.setState({ error, info });
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI when error occurs
      return <h2></h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
