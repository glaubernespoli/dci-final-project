import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import * as React from 'react';
import Copyright from './Copyright/Copyright';
import Home from './Home/Home';
import Info from './Info/Info';
import Logo from './Logo/logo';
import SocialMedia from './SocialmediaIcons/SocialmediaIcons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },

  footerStyle: {
    display: 'flex',
    justifyContent: 'space-evenly'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar className={classes.footerStyle}>
          <Logo />
          <Home />
          <Info />
          <SocialMedia />
          <Copyright />
        </Toolbar>
      </AppBar>
    </div>
  );
}
