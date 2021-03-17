import { Button, Toolbar } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import React from 'react';
import { Link } from 'react-router-dom';
import HeaderStyles from '../../../assets/js/Header/HeaderStyles';
import { LoginRoute } from '../../../assets/js/Routing/routes';

const UserControl = () => {
  const classes = HeaderStyles();

  return (
    <>
      <Toolbar>
        <Button color="secondary" variant="contained" component={Link} to={LoginRoute}>
          LogIn
        </Button>
        <Button color="inherit" className={classes.logo}>
          <AddShoppingCartIcon />
        </Button>
      </Toolbar>
    </>
  );
};
export default UserControl;
