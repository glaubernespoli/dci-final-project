import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import React from 'react';

const useStyles = makeStyles({
  tool: {
    display: 'flex',
    justifyContent: 'space-around'
  }
});

const Logo = () => {
  const classes = useStyles();

  return (
    <div className={classes.tool}>
      <Button variant="contained" color="primary">
        <MusicVideoIcon />
      </Button>
      <Typography variant="h6" color="secondary">
        S-Y-R
      </Typography>
    </div>
  );
};

export default Logo;
