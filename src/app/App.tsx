import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { Button } from "antd";
import ErrorPage from "@pages/errorPage/errorPage";
import Navigation from "@components/navigation/navigation";
import "./App.less";

const App: React.FC = () => {
  const raiseError = () => {
    throw new Error();
  };
  return (
    <Switch>
      <Navigation />
      <div>
        <p>This is my app</p>
        <ErrorPage>
          <Button onClick={raiseError}>Throw Error</Button>
        </ErrorPage>
      </div>
    </Switch>
  );
};

export default App;
