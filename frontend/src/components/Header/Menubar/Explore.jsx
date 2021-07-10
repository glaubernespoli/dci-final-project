import { Button, Menu, MenuItem } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ExploreIcon from '@material-ui/icons/Explore';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const NavItem = ({ subExplores, title }) => {
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
        <ExploreIcon style={{ display: 'flex', margin: '0 1rem' }} />
        {title}
        {subExplores.length ? <ArrowRightIcon /> : ''}
      </Button>
      <Menu
        id="demo-positioned-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'right',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'right',
          horizontal: 'bottom'
        }}
      >
        {subExplores.map((subExplore, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <MenuItem key={index} onClick={handleClose}>
            {subExplore}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
NavItem.defaultProps = {
  subExplores: []
};
NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  subExplores: PropTypes.arrayOf(PropTypes.string)
};

export default NavItem;
