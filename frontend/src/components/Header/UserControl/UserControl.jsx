import { Button, Toolbar } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import React from 'react';
import { Link } from 'react-router-dom';
import { LoginRoute } from '../../../Routing/routes';

const UserControl = () => (
  <Toolbar>
    <Button color="secondary" variant="contained" component={Link} to={LoginRoute}>
      LogIn
    </Button>
    <Button color="inherit">
      <AddShoppingCartIcon />
    </Button>
  </Toolbar>
);
export default UserControl;
