import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import Logo from './Logo/Logo';
import MenuBar from './MenuBar/MenuBar';
import SearchItem from './Search/Search';
import UserControl from './UserControl/UserControl';

const useStyles = makeStyles({
  app: {
    background: 'linear-gradient(90deg, #333 25%, #333 25%, #333 50%)',
    padding: '1rem ',
  },
  tool: {
    display: 'flex',
    justifyContent: 'space-around',
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.app}>
        <Toolbar className={classes.tool}>
          <div>
            <Logo />
          </div>
          <div>
            <MenuBar />
          </div>
          <div>
            <SearchItem />
          </div>
          <div>
            <UserControl />
          </div>
        </Toolbar>
      </AppBar>

      {/* <SignUp /> */}
      {/* <Login /> */}
    </div>
  );
};

export default Header;
