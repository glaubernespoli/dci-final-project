/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import { Button, Menu, MenuItem } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// eslint-disable-next-line import/no-unresolved
import NestedMenuItem from 'material-ui-nested-menu-item';
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';
import MyContext from '../../../context/MyContext';
import { SearchRoute } from '../../../Routing/routes';
import getData from '../ApiSearch';

const useNavigateParams = () => {
  const navigate = useNavigate();

  return (url, params) => {
    const path = generatePath(':url?:queryString', {
      url,
      queryString: params
    });
    navigate(path);
  };
};

const NavItem = ({ subFormats, subStyles, title, subTitles }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const context = useContext(MyContext);
  const { setSearch, search, setRecords, pageNumber } = context;

  const navigate = useNavigateParams();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    setSearch(event.target.innerText);
    navigate(SearchRoute, `q=${event.target.innerText}&page=${pageNumber}`);

    // eslint-disable-next-line no-alert
    alert(event.target.innerText);
    getData(event.target.innerText)
      .then((response) => {
        setRecords(response.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (search || pageNumber) {
      navigate(SearchRoute, `q=${search}&page=${pageNumber}`);
    }
  }, [SearchRoute, pageNumber]);

  useEffect(() => {
    getData(search)
      .then((response) => {
        setRecords(response.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [SearchRoute, pageNumber]);

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
