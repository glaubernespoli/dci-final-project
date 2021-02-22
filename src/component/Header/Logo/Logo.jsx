import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import React from 'react';

const useStyles = makeStyles({
  tool: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  Typography: {
    padding: '.5rem 1rem ',
    fontWeight: 'bolder',
  },
  icon: {
    padding: '.5rem',
    borderRadius: '.25rem',
  },
});

const Logo = () => {
  const classes = useStyles();

  return (
    <div className={classes.tool}>
      <Button variant="contained" color="primary" className={classes.icon}>
        <MusicVideoIcon />
      </Button>
      <Typography variant="h6" className={classes.Typography} color="inherit">
        S-Y-R
      </Typography>
    </div>
  );
};

export default Logo;
