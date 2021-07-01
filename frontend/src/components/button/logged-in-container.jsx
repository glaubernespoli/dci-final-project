import { useAuth0 } from '@auth0/auth0-react';
import { CircularProgress, Link, Menu, MenuItem } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/styles';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import useCheckIsAdmin from '../../hooks/useCheckIsAdmin';
import { AdminRoute, ProfileRoute } from '../../Routing/routes';
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
  const { isAdmin, loading } = useCheckIsAdmin();

  const isMenuOpen = Boolean(anchorEl);
  const menuId = 'profile-menu';

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (callback) => {
    setAnchorEl(null);
    if (callback) callback();
  };

  const onClickRedirect = () => handleMenuClose();

  const onClickLogout = () =>
    handleMenuClose(() =>
      logout({
        returnTo: window.location.origin
      })
    );

  if (loading) {
    return <CircularProgress />;
  }
  return (
    <ButtonContainer>
      <>
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
          onClose={onClickRedirect}
        >
          {!isAdmin && (
            <>
              <MenuItem onClick={onClickRedirect}>
                <Link component={RouterLink} to={ProfileRoute} color="white" underline="none">
                  Profile
                </Link>
              </MenuItem>
              <MenuItem onClick={onClickRedirect}>My account</MenuItem>
            </>
          )}
          {isAdmin && (
            <MenuItem onClick={onClickRedirect}>
              <Link href={AdminRoute} color="white" underline="none">
                Admin
              </Link>
            </MenuItem>
          )}
          <MenuItem onClick={onClickLogout}>Logout</MenuItem>
        </Menu>
      </>
    </ButtonContainer>
  );
};

export default LoggedInButtonContainer;
