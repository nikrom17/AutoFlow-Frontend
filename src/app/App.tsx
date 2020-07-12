import React from "react";
import * as Sentry from "@sentry/react";

const App: React.FC = () => {
  const [message, setMessage] = React.useState("This is my app");
  return (
    <Sentry.ErrorBoundary
      fallback={({ error, componentStack, resetError }) => (
        <React.Fragment>
          <div>You have encountered an error</div>
          <div>{error || error!.toString()}</div>
          <div>{componentStack}</div>
          <button
            onClick={() => {
              setMessage("This is my app");
              resetError();
            }}
          >
            Click here to reset!
          </button>
        </React.Fragment>
      )}
    >
      <div>{message}</div>
      {/* on click, this button sets an Object as a message, not a string. */}
      {/* which will cause an error to occur in the component tree */}
      {/* @ts-ignore */}
      {/* <button onClick={() => setMessage({ message: { text: "Hello World" } })}>
        Click here to change message!
      </button> */}
    </Sentry.ErrorBoundary>
  );
};

export default App;
