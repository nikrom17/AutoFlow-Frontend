import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Layout } from 'antd';
import { routes } from 'src/app/routing/routeConstants';
import ErrorPage from '@pages/errorPage/errorPage';
import Headers from '@components/header/header';
import Navigation from '@components/navigation/navigation';
import './app.less';

const { Header, Sider, Content } = Layout;
const headerStyles = { paddingRight: '1rem', marginLeft: '0.1875rem' };

const App: React.FC = () => {
  // add things here
  return (
    <ErrorPage>
      <Layout>
        <Sider defaultCollapsed>
          <Navigation />
        </Sider>
        <Layout>
          <Header style={headerStyles}>
            <Headers />
          </Header>
          <Content>
            <main>
              <Switch>
                {routes.allIds.map((routeId) => {
                  const { Component, path } = routes.byId[routeId];
                  return <Route component={Component} exact key={path} path={path} />;
                })}
              </Switch>
            </main>
          </Content>
        </Layout>
      </Layout>
    </ErrorPage>
  );
};

// export default withAuthenticationRequired(App);
export default App;
