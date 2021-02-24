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
      <Typography variant="h5" className={classes.logo} fontSize="1.2rem" fontWeight="bolder">
        Sell-Your-Records
      </Typography>
    </div>
  );
};

export default Logo;
