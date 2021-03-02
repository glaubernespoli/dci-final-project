import { Button, Typography } from '@material-ui/core';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import React from 'react';
import { Link } from 'react-router-dom';
import { HomeRoute } from '../../Routing';
import HeaderStyles from '../HeaderStyles';

const Logo = () => {
  const classes = HeaderStyles();

  return (
    <div className={classes.tool}>
      <Button component={Link} to={HomeRoute} variant="contained" color="primary">
        <MusicVideoIcon />
      </Button>
      <Typography variant="h5" className={classes.logo} fontSize="1.2rem" fontWeight="bolder">
        Sell-Your-Records
      </Typography>
    </div>
  );
};

export default Logo;
