import { Button, Typography } from '@material-ui/core';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import React from 'react';
import HeaderStyles from '../HeaderStyles';

const Logo = () => {
  const classes = HeaderStyles();

  return (
    <div className={classes.tool}>
      <Button variant="contained" color="primary">
        <MusicVideoIcon />
      </Button>
      <Typography variant="h6" color="secondary" className={classes.logo}>
        S-Y-R
      </Typography>
    </div>
  );
};

export default Logo;
