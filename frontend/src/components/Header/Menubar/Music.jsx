/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Menu, MenuItem } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// eslint-disable-next-line import/no-unresolved
import NestedMenuItem from 'material-ui-nested-menu-item';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchRoute } from '../../../Routing/routes';

const useNavigateParams = () => {
  const navigate = useNavigate();

  return (url, params, page) => {
    navigate({
      pathname: url,
      search: `?q=${params}&page=${page}`
    });
  };
};

const NavItem = ({ subFormats, subStyles, title, subTitles }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const [page, setPage] = useState('0');
  const navigate = useNavigateParams();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    navigate(SearchRoute, event.target.innerText, page);
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
        <NestedMenuItem label="Format" parentMenuOpen={!!anchorEl}>
          {subFormats.map((subFormat, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <MenuItem key={index} onClick={handleClose}>
              {subFormat}
            </MenuItem>
          ))}
        </NestedMenuItem>
        <NestedMenuItem label="Style" parentMenuOpen={!!anchorEl}>
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
