import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import React from 'react';

const UserControl = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Toolbar>
        <Button
          aria-controls="demo-positioned-menu"
          aria-haspopup="true"
          color="inherit"
          onClick={handleClick}
        >
          User Control
          <ArrowDropDownIcon />
        </Button>
        <Menu
          id="demo-positioned-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuItem onClick={handleClose}>Login</MenuItem>
          <MenuItem onClick={handleClose}>SignUp</MenuItem>
        </Menu>

        <Button color="inherit">
          <AddShoppingCartIcon />
        </Button>
      </Toolbar>
    </div>
  );
};

export default UserControl;
