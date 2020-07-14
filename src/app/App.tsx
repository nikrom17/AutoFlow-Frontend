import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { routes } from "src/app/routing/routeConstants";
import ErrorPage from "@pages/errorPage/errorPage";
import Header from "@components/header/header";
import Navigation from "@components/navigation/navigation";
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
