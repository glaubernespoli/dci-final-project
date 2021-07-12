import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import React from 'react';
import Cart from './Cart/Cart';
import Logo from './Logo/Logo';
import MenuBar from './Menubar/MenuBar';
import Search from './Search/Search';
import UserControl from './UserControl/UserControl';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    '@media (min-Width :601px)': {
      display: 'none'
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'down' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'down' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <UserControl />
        <Cart />
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="sticky" color="inherit">
        <Toolbar className={classes.root}>
          <IconButton className={classes.menuButton} color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <Logo />
          <MenuBar />
          <Search />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <UserControl />
            <Cart />
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
