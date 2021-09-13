import React from 'react';
import { StylesProvider, createGenerateClassName, ThemeProvider, createTheme } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
  productionPrefix: 'con'
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#f8f8dd'
    }
  }
});

const AppTheme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StylesProvider generateClassName={generateClassName}>{children}</StylesProvider>
  </ThemeProvider>
);

export default AppTheme;
