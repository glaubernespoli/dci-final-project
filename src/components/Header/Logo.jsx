import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../../assets/img/Logo/logo.jpg';
import { HomeRoute } from '../../Routing/routes';
import HeaderStyles from './HeaderStyles';

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
