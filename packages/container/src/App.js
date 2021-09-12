import React, { lazy, Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserHistory } from 'history';

const DashboardApp = lazy(() => import('./apps/DashboardApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'mbco'
});

const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <StylesProvider generateClassName={generateClassName}>
      <Suspense fallback="Loading...">
        <Switch>
          <Route exact path="/">
            <DashboardApp />
          </Route>
        </Switch>
      </Suspense>
    </StylesProvider>
  </Router>
);

export default App;
