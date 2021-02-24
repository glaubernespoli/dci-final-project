import { Button, Menu, MenuItem } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import PropTypes from 'prop-types';
import React from 'react';

const NavItem = ({ title, subItems }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-controls="demo-positioned-menu"
        aria-haspopup="true"
        color="inherit"
        onClick={handleClick}
      >
        {title}
        {subItems.length ? <ArrowDropDownIcon /> : ''}
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
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
      >
        {subItems.map((subItem) => (
          <MenuItem key={subItem.id} onClick={handleClose}>
            {subItem}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
NavItem.defaultProps = {
  subItems: []
};
NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  subItems: PropTypes.arrayOf(PropTypes.string)
};

export default NavItem;
