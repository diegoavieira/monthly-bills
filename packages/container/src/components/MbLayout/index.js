import React from 'react';
import { makeStyles } from '@material-ui/core';
import MbToolbar from '../MbToolbar';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    background: theme.palette.secondary.light,
    overflow: 'auto',
    '@media (min-width: 0px) and (orientation: landscape)': {
      height: 'calc(100vh - 48px)'
    },
    '@media (min-width: 600px)': {
      height: 'calc(100vh - 64px)'
    },
    height: 'calc(100vh - 56px)'
  },
  main: {
    width: '100%'
  }
}));

const MbLayout = ({ children, title }) => {
  const classes = useStyles();

  return (
    <>
      <MbToolbar title={title} />
      <div className={classes.container}>
        {/* <Sidenav /> */}
        <main className={classes.main}>{children}</main>
      </div>
    </>
  );
};

export default MbLayout;
