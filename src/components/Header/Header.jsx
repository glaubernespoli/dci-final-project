import { AppBar, Toolbar } from '@material-ui/core';
import React from 'react';
import HeaderStyles from '../../assets/js/Header/HeaderStyles';
import Logo from './Logo/Logo';
import MenuBar from './MenuBar/MenuBar';
import SearchItem from './Search/Search';
import UserControl from './UserControl/UserControl';

const Header = () => {
  const classes = HeaderStyles();
  return (
    <>
      <AppBar position="sticky" color="inherit">
        <Toolbar className={classes.tool}>
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
