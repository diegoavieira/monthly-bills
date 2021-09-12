import React, { lazy, Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserHistory } from 'history';

const DashboardApp = lazy(() => import('./apps/DashboardApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'con'
});

const history = createBrowserHistory();

const App = () => (
  <StylesProvider generateClassName={generateClassName}>
    <Router history={history}>
      <Suspense fallback="Loading...">
        <Switch>
          <Route exact path="/">
            <DashboardApp />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  </StylesProvider>
);

export default App;
