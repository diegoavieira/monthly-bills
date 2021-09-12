import React, { lazy, Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const Dashboard = lazy(() => import('./pages/Dashboard'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'das'
});

const App = ({ history }) => (
  <StylesProvider generateClassName={generateClassName}>
    <Router history={history}>
      <Suspense fallback="Loading...">
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  </StylesProvider>
);

export default App;
