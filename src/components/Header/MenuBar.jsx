import { Toolbar } from '@material-ui/core';
import React from 'react';
import HeaderStyles from './HeaderStyles';
import NavItem from './NavItem';

const MenuBar = () => {
  const classes = HeaderStyles();

  return (
    <>
      <Toolbar>
        <NavItem
          title="Music"
          subItems={['format', 'Gender', 'Style', 'Others']}
          className={classes.logo}
        />
        <NavItem
          title="Explore"
          subItems={[
            'Popular Release',
            'Recent Release',
            'Articles',
            'Advanced Search',
            'About Music'
          ]}
          className={classes.logo}
        />
      </Toolbar>
    </>
  );
};

export default MenuBar;
