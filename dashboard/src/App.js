import React, { lazy, Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const Dashboard = lazy(() => import('./pages/Dashboard'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'mbds'
});

const App = ({ history }) => (
  <Router history={history}>
    <StylesProvider generateClassName={generateClassName}>
      <Suspense fallback="Loading...">
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Suspense>
    </StylesProvider>
  </Router>
);

export default App;
