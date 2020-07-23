import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { NavContext } from "@components/navigation/context/navigation";
// import { withAuthenticationRequired } from "@auth0/auth0-react";
import { routes } from "src/app/routing/routeConstants";
import ErrorPage from "@pages/errorPage/errorPage";
import Header from "@components/header/header";
import Navigation from "@components/navigation/navigation";
import "./app.less";

const App: React.FC = () => {
  const [navigationContext, setNavigationContext] = React.useState({
    collapsed: true,
  });
  const navContextValue = React.useMemo(
    () => ({ navigationContext, setNavigationContext }),
    [navigationContext]
  );

  return (
    <ErrorPage>
      <NavContext.Provider value={navContextValue}>
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
      </NavContext.Provider>
    </ErrorPage>
  );
};

// export default withAuthenticationRequired(App);
export default App;
