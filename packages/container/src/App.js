import React from 'react';
import { MbHeader } from '@components';
import AppRouter from './App.router';
import AppTheme from './App.theme';

const App = () => (
  <AppTheme>
    <MbHeader title="Contas Mensais" fixed />
    <AppRouter />
  </AppTheme>
);

export default App;
