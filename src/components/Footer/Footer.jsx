import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import * as React from 'react';
import Copyright from './Copyright';
import useStyles from './FooterStyle';
import Info from './Info';
import Logo from './Logo';
import SocialMedia from './SocialmediaIcons';

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="relative" color="inherit">
        <Toolbar className={classes.footerStyle}>
          <Logo />
          <Info />
          <SocialMedia />
          <Copyright />
        </Toolbar>
      </AppBar>
    </div>
  );
}
