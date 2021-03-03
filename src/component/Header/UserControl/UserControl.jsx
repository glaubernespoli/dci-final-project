import { Button, Toolbar } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import React from 'react';
import { Link } from 'react-router-dom';
import { LoginRoute } from '../../Routing/routes';
import HeaderStyles from '../HeaderStyles';

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
