import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { HomeRoute } from '../../Routing/routes';
import HeaderStyles from '../HeaderStyles';
import LogoImage from './logo.jpg';

const Logo = () => {
  const classes = HeaderStyles();

  return (
    <div>
      <Button component={Link} to={HomeRoute} color="inherit">
        <img src={LogoImage} alt="LogoImage" className={classes.logo} />
      </Button>
    </div>
  );
};

export default Logo;
