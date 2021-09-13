import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1
  },
  fixed: theme.mixins.toolbar
}));

export { useStyles };
