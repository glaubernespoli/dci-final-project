import { AppBar, Toolbar } from '@material-ui/core';
import React from 'react';
import Cart from './Cart/Cart';
import HeaderStyles from './Header.styles';
import Logo from './Logo/Logo';
import MenuBar from './Menubar/MenuBar';
import SearchItem from './Search/Search';
import UserControl from './UserControl/UserControl';

const Header = () => {
  const classes = HeaderStyles();
  return (
    <>
      <AppBar position="sticky" color="inherit">
        <Toolbar className={classes.container}>
          <Logo />
          <MenuBar />
          <SearchItem />
          <Cart />
          <UserControl />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
