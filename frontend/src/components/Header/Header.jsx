import { AppBar, Toolbar } from '@material-ui/core';
import React from 'react';
import HeaderStyles from './Header.styles';
import Logo from './Logo';
import MenuBar from './MenuBar';
import SearchItem from './Search';
import UserControl from './UserControl';

const Header = () => {
  const classes = HeaderStyles();
  return (
    <>
      <AppBar position="sticky" color="inherit">
        <Toolbar className={classes.container}>
          <Logo />
          <MenuBar />
          <SearchItem />
          <UserControl />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
