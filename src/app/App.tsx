import React from "react";
import * as Sentry from "@sentry/react";

const App: React.FC = () => {
  return (
    <Sentry.ErrorBoundary
      fallback={({ error, componentStack, resetError }) => (
        <>
          <div>You have encountered an error</div>
          <div>{error || error!.toString()}</div>
          <div>{componentStack}</div>
        </>
      )}
    >
      <div>This is the app</div>
    </Sentry.ErrorBoundary>
  );
};

export default App;
