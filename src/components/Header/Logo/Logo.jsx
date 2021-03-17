import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../../../assets/img/Logo/logo.jpg';
import HeaderStyles from '../../../assets/js/Header/HeaderStyles';
import { HomeRoute } from '../../../assets/js/Routing/routes';

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
