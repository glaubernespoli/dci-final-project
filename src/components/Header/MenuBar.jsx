import { Toolbar } from '@material-ui/core';
import React from 'react';
import HeaderStyles from './Header.styles';
import NavItem from './NavItem';

const MenuBar = () => {
  const classes = HeaderStyles();

  /*
  FIXME check if className="logo" is actually being used by the NavItem components.
  If it is, then the definition (spacing in the page) should be defined in the
  container element.
  */
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
