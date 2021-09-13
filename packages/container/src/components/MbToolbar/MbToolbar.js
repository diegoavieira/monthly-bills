import React from 'react';
import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1
  },
  fixed: theme.mixins.toolbar
}));

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
