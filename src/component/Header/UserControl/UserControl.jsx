import { Button, Toolbar } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import React from 'react';
import HeaderStyles from '../HeaderStyles';

const UserControl = () => {
  const classes = HeaderStyles();

  return (
    <>
      <Toolbar>
        <Button color="secondary" variant="contained">
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
