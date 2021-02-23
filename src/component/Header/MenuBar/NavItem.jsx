import { Button, Menu, MenuItem } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import PropTypes from 'prop-types';
import React from 'react';

const NavItem = ({ title, subTitle, subTitle1, subTitle2 }) => {
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
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
      >
        <MenuItem onClick={handleClose}>{subTitle}</MenuItem>
        <MenuItem onClick={handleClose}>{subTitle1}</MenuItem>
        <MenuItem onClick={handleClose}>{subTitle2}</MenuItem>
      </Menu>
    </>
  );
};
NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  subTitle1: PropTypes.string.isRequired,
  subTitle2: PropTypes.string.isRequired
};
export default NavItem;
