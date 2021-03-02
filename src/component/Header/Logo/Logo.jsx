import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { HomeRoute } from '../../Routing';
import HeaderStyles from '../HeaderStyles';
import LogoImage from './logo1.jpg';

const Logo = () => {
  const classes = HeaderStyles();

  return (
    <div className={classes.tool}>
      <Button component={Link} to={HomeRoute}>
        <img src={LogoImage} alt="LogoImage" className={classes.logo} />
      </Button>
      {/* <Typography variant="h5" className={classes.logo} fontSize="1.2rem" fontWeight="bolder">
        Sell-Your-Records
      </Typography> */}
    </div>
  );
};

export default Logo;
