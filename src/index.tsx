import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.less";
import App from "./app/app";
import { Auth0Provider } from "@auth0/auth0-react";
import auth0Config from "../auth0-config";
// import * as Sentry from "@sentry/react";
// import { Integrations as AmpIntegrations } from "@sentry/apm";
import * as serviceWorker from "./serviceWorker";

// Sentry.init({
//   dsn:
//     "https://56989b19084a4a0783d729f02cc0ff2a@o419182.ingest.sentry.io/5329556",
//   integrations: [new AmpIntegrations.Tracing()],
//   tracesSampleRate: 0.25,
// });

const onRedirectCallback = (appState: any) => {
  // history.push(
  //   appState && appState.returnTo
  //     ? appState.returnTo
  //     : window.location.pathname
  // );
  console.log(appState);
};

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={auth0Config.domain}
      clientId={auth0Config.clientId}
      redirectUri={auth0Config.redirect}
      onRedirectCallback={onRedirectCallback}
    >
      <Router>
        <App />
      </Router>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
