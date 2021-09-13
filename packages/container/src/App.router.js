import React, { lazy, Suspense } from 'react';
import { createBrowserHistory } from 'history';
import { Route, Router, Switch } from 'react-router-dom';

const history = createBrowserHistory();

const DashboardApp = lazy(() => import('./pages/DashboardApp'));

const AppRouter = () => (
  <Router history={history}>
    <Suspense fallback="Loading...">
      <Switch>
        <Route exact path="/">
          <DashboardApp />
        </Route>
      </Switch>
    </Suspense>
  </Router>
);

export default AppRouter;
