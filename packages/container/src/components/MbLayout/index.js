import React from 'react';
import { makeStyles } from '@material-ui/core';
import MbToolbar from '../MbToolbar';

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    background: theme.palette.background.default,
    overflowY: 'auto',
    '@media (min-width: 0px) and (orientation: landscape)': {
      height: 'calc(100vh - 48px)'
    },
    '@media (min-width: 600px)': {
      height: 'calc(100vh - 64px)'
    },
    height: 'calc(100vh - 56px)'
  },
  section: {
    width: '100%'
  }
}));

const MbLayout = ({ children, title }) => {
  const classes = useStyles();

  return (
    <>
      <MbToolbar title={title} />
      <main className={classes.main}>
        <section className={classes.section}>{children}</section>
      </main>
    </>
  );
};

export default MbLayout;
