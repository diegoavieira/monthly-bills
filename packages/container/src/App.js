import React from 'react';
import { RdsHeader } from '@rdsystem/common';
import AppRouter from './App.router';
import AppTheme from './App.theme';

const App = () => (
  <AppTheme>
    <RdsHeader title="Contas Mensais" fixed />
    <AppRouter />
  </AppTheme>
);

export default App;
