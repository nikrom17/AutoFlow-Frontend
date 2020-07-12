import React from "react";
import * as Sentry from "@sentry/react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "This is my app",
    };
  }

  render() {
    return (
      <Sentry.ErrorBoundary
        fallback={({ error, componentStack, resetError }) => (
          <React.Fragment>
            <div>You have encountered an error</div>
            <div>{error.toString()}</div>
            <div>{componentStack}</div>
            <button
              onClick={() => {
                this.setState({ message: "This is my app" });
                resetError();
              }}
            >
              Click here to reset!
            </button>
          </React.Fragment>
        )}
      >
        <div>{this.state.message}</div>
        {/* on click, this button sets an Object as a message, not a string. */}
        {/* which will cause an error to occur in the component tree */}
        <button
          onClick={() => this.setState({ message: { text: "Hello World" } })}
        >
          Click here to change message!
        </button>
      </Sentry.ErrorBoundary>
    );
  }
}

export default App;
