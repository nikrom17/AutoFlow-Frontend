import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.less";
import App from "./app/app";
// import * as Sentry from "@sentry/react";
import * as serviceWorker from "./serviceWorker";

// Sentry.init({
//   dsn:
//     "https://56989b19084a4a0783d729f02cc0ff2a@o419182.ingest.sentry.io/5329556",
// });

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
