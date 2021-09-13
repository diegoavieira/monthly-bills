import React, { lazy, Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';
import MbLayout from './components/MbLayout';

const DashboardApp = lazy(() => import('./apps/DashboardApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'con'
});

const history = createBrowserHistory();

const App = () => (
  <StylesProvider generateClassName={generateClassName}>
    <MbLayout title="Contas Mensais">
      <Router history={history}>
        <Suspense fallback="Loading...">
          <Switch>
            <Route exact path="/">
              <DashboardApp />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </MbLayout>
  </StylesProvider>
);

export default App;
