import { Button, Menu, MenuItem } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// eslint-disable-next-line import/no-unresolved
import NestedMenuItem from 'material-ui-nested-menu-item';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const NavItem = ({ subFormats, subStyles, title, subTitles }) => {
  const [anchorEl, setAnchorEl] = useState(null);
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
        {/* {subItems.length ?<ArrowDropDownIcon /> : ''} */}
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
        {/* <MenuItem onClick={handleClose}>{subTitle}</MenuItem> */}
        {subTitles.map((subTitle, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <MenuItem key={index} onClick={handleClose}>
            {subTitle}
          </MenuItem>
        ))}
        <NestedMenuItem label="Format" parentMenuOpen={!!anchorEl} onClick={handleClose}>
          {subFormats.map((subFormat, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <MenuItem key={index} onClick={handleClose}>
              {subFormat}
            </MenuItem>
          ))}
        </NestedMenuItem>
        <NestedMenuItem label="Style" parentMenuOpen={!!anchorEl} onClick={handleClose}>
          {subStyles.map((subStyle, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <MenuItem key={index} onClick={handleClose}>
              {subStyle}
            </MenuItem>
          ))}
        </NestedMenuItem>
      </Menu>
    </>
  );
};
NavItem.defaultProps = {
  subFormats: [],
  subStyles: [],
  subTitles: []
};
NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  subTitles: PropTypes.arrayOf(PropTypes.string),
  subFormats: PropTypes.arrayOf(PropTypes.string),
  subStyles: PropTypes.arrayOf(PropTypes.string)
};

export default NavItem;
