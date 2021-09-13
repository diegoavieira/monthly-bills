import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { useStyles } from './MbToolbar.styles';

const MbToolbar = ({ title, fixed, color }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position={fixed ? 'fixed' : 'static'}>
        <Toolbar color={color}>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      {fixed && <div className={classes.fixed} />}
    </>
  );
};

export default MbToolbar;
