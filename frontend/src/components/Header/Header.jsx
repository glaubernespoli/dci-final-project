import { AppBar } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExploreIcon from '@material-ui/icons/Explore';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import React from 'react';
import LoginButton from '../button/login-button';
import SignUpButton from '../button/signup-button';
import Cart from './Cart/Cart';
import HeaderMobileStyles from './Header.style';
import Logo from './Logo/Logo';
import MenuBar from './Menubar/MenuBar';
import Search from './Search/Search';
import UserControl from './UserControl/UserControl';

const HeaderMobile = () => {
  const classes = HeaderMobileStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  // Handling Menu For Responsiveness
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'top' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'top' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <SignUpButton />
      </MenuItem>
      <MenuItem>
        <LoginButton />
      </MenuItem>
      <MenuItem>
        <Cart />
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <div>
        <AppBar position="sticky" color="inherit">
          <Toolbar className={classes.mobileAppBar}>
            <IconButton onClick={handleDrawerOpen} className={classes.menuButton} color="inherit">
              <MenuIcon />
            </IconButton>
            <div className={classes.grow}>
              <Logo />
            </div>
            <div className={classes.grow}>
              <MenuBar />
            </div>
            <Search />

            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <div>
                <UserControl />
              </div>
              <div>
                <Cart />
              </div>
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
      </div>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Music', 'Explore'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <LibraryMusicIcon /> : <ExploreIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      {renderMobileMenu}
    </>
  );
};
export default HeaderMobile;
