import React from "react";

type Props = { children: React.ReactNode };

type State = { hasError: boolean };

/**
 * Catches render errors from descendants so one broken widget does not blank the whole page.
 */
export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("ErrorBoundary:", error, info.componentStack);
  }

  handleRetry = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary" role="alert">
          <h1 className="error-boundary__title">Something went wrong</h1>
          <p className="error-boundary__text">
            Please refresh the page or try again. If the problem continues,
            check the browser console for details.
          </p>
          <button
            type="button"
            className="error-boundary__retry"
            onClick={this.handleRetry}
          >
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
