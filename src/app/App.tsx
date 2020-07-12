import React from "react";
import * as Sentry from "@sentry/react";
import ErrorPage from "pages/errorPage/errorPage";

const App: React.FC = () => {
  return (
    <Sentry.ErrorBoundary
      fallback={({ error, componentStack, resetError }) => (
        <ErrorPage error={error} componentStack={componentStack} />
      )}
    >
      <div>This is the app</div>
    </Sentry.ErrorBoundary>
  );
};

export default App;
