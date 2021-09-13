import React from 'react';
import { MbToolbar } from '@components';
import AppRouter from './App.router';
import AppTheme from './App.theme';

const App = () => (
  <AppTheme>
    <MbToolbar title="Contas Mensais" fixed />
    <AppRouter />
  </AppTheme>
);

export default App;
