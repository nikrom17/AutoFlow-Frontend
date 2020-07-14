import * as React from "react";
import { Route, Switch } from "react-router-dom";
import ErrorPage from "@pages/errorPage/errorPage";
import HomePage from "@pages/homePage/homePage";
import Navigation from "@components/navigation/navigation";
import Header from "@components/header/header";
import { routes } from "src/app/routing/routeConstants";
import "./app.less";

const App: React.FC = () => {
  return (
    <ErrorPage>
      <Navigation />
      <div className="wrapper">
        <Header />
        <main>
          <Switch>
            {routes.allIds.map((routeId) => {
              const { Component, path } = routes.byId[routeId];
              console.log(path);
              return (
                <Route component={Component} exact key={path} path={path} />
              );
            })}
          </Switch>
        </main>
      </div>
    </ErrorPage>
  );
};

export default App;
