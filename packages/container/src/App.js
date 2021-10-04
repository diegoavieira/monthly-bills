import React, { lazy, Suspense } from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { Router, Route, Switch } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserHistory } from 'history';
import MbHeader from './components/MbHeader/MbHeader';

const theme = createTheme({});

const generateClassName = createGenerateClassName({
  productionPrefix: 'con',
  seed: 'Con'
});

const history = createBrowserHistory();

const DashboardApp = lazy(() => import('./pages/DashboardApp'));
const AccountApp = lazy(() => import('./pages/AccountApp'));

const App = () => (
  <ThemeProvider theme={theme}>
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <MbHeader title="Contas Mensais" fixed />
        <div>
          <Suspense fallback="Loading...">
            <Switch>
              <Route exact path="/">
                <DashboardApp />
              </Route>
              <Route path="/account">
                <AccountApp />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </Router>
    </StylesProvider>
  </ThemeProvider>
);

export default App;
