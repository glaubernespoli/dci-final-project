import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import React from 'react';

const UserControl = () => (
  <div>
    <Toolbar>
      <Button color="secondary" variant="contained">
        LogIn
      </Button>
      <Button color="inherit">
        <AddShoppingCartIcon />
      </Button>
    </Toolbar>
  </div>
);
export default UserControl;
