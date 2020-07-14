import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { Button } from "antd";
import ErrorPage from "@pages/errorPage/errorPage";
import HomePage from "@pages/homePage/homePage";
import Navigation from "@components/navigation/navigation";
import Header from "@components/header/header";
import "./app.less";

const App: React.FC = () => {
  return (
    <ErrorPage>
      <Navigation />
      <div className="wrapper">
        <Header />
        <main>
          <Switch>
            <Route component={HomePage}></Route>
          </Switch>
        </main>
      </div>
    </ErrorPage>
  );
};

export default App;
