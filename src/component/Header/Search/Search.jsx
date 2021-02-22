import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      width: '35ch',
      color: 'white',
      padding: '0 .75rem ',
    },
  },
  icon: {
    position: 'absolute',
    right: '21rem',
    top: '1rem',
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="on">
      <TextField
        id="outlined-basic"
        label="Search Your Music...."
        variant="filled"
        className={classes.root}
      />
      <SearchIcon className={classes.icon} />
    </form>
  );
}
