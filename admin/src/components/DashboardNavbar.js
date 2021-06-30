import { useAuth0 } from '@auth0/auth0-react';
import { AppBar, Box, Hidden, IconButton, Toolbar } from '@material-ui/core';
import LogoutOutlined from '@material-ui/icons/LogoutOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import Logo from './Logo';

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => {
  const { logout } = useAuth0();

  const doLogout = () =>
    logout({
      returnTo: `${process.env.REACT_APP_FRONTEND_ROUTE}`
    });
  return (
    <AppBar elevation={0} {...rest}>
      <Toolbar>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Box sx={{ flexGrow: 1 }} />
        <Hidden lgDown>
          <IconButton color="inherit" onClick={doLogout}>
            <LogoutOutlined />
          </IconButton>
          <IconButton color="inherit">{/* <InputIcon /> */}</IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func.isRequired
};

export default DashboardNavbar;
