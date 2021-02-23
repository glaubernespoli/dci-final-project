import { Button, Toolbar } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import React from 'react';
import HeaderStyles from '../HeaderStyles';
import NavItem from './NavItem';

const MenuBar = () => {
  const classes = HeaderStyles();

  return (
    <>
      <Toolbar>
        <Button color="inherit" className={classes.logo}>
          <HomeIcon />
        </Button>
        <NavItem
          title="Music"
          subTitle="Format"
          subTitle1="Gender"
          subTitle2="Style"
          className={classes.logo}
        />
        <NavItem
          title="Explore"
          subTitle="Popular Release"
          subTitle1="Recent Release"
          subTitle2="Articles"
          className={classes.logo}
        />
      </Toolbar>
    </>
  );
};

export default MenuBar;
