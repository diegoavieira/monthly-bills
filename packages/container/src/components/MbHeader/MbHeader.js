import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStyles } from './MbHeader.styles';

const MbHeader = ({ title, fixed, color }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <AppBar position={fixed ? 'fixed' : 'static'}>
        <Toolbar color={color}>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <Button color="inherit" onClick={() => history.push('/account')}>
            Account
          </Button>
        </Toolbar>
      </AppBar>
      {fixed && <div className={classes.fixed} />}
    </>
  );
};

export default MbHeader;
