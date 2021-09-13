import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const MbToolbar = ({ title }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography>{title}</Typography>
    </Toolbar>
  </AppBar>
);

export default MbToolbar;
