import { useAuth0 } from '@auth0/auth0-react';
import { Menu, MenuItem } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/styles';
import { useState } from 'react';
import ButtonContainer from './button-container';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  }
}));

const LoggedInButtonContainer = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const { logout } = useAuth0();

  const isMenuOpen = Boolean(anchorEl);
  const menuId = 'profile-menu';

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (callback) => {
    setAnchorEl(null);
    callback();
  };

  const onClickLogout = () =>
    handleMenuClose(() =>
      logout({
        returnTo: window.location.origin
      })
    );
  return (
    <ButtonContainer>
      <div className={classes.sectionDesktop}>
        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </div>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        <MenuItem onClick={onClickLogout}>Logout</MenuItem>
      </Menu>
    </ButtonContainer>
  );
};

export default LoggedInButtonContainer;
