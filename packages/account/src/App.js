import React, { lazy, Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const Account = lazy(() => import('./pages/Account'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'acc'
});

const App = ({ history }) => (
  <StylesProvider generateClassName={generateClassName}>
    <Router history={history}>
      <Suspense fallback="Loading...">
        <Switch>
          <Route exact path="/account">
            <Account />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  </StylesProvider>
);

export default App;
