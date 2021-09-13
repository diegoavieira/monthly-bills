import React from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import MbToolbar from '@components/MbToolbar';
import AppRouter from './App.router';

const generateClassName = createGenerateClassName({
  productionPrefix: 'con'
});

const App = () => (
  <StylesProvider generateClassName={generateClassName}>
    <MbToolbar title="Contas Mensais" fixed />
    <AppRouter />
  </StylesProvider>
);

export default App;
