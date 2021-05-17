import { Toolbar } from '@material-ui/core';
import React from 'react';
import NavItem from './NavItem';

const MenuBar = () => (
  <>
    <Toolbar>
      <NavItem title="Music" subItems={['format', 'Gender', 'Style', 'Others']} />
      <NavItem
        title="Explore"
        subItems={[
          'Popular Release',
          'Recent Release',
          'Articles',
          'Advanced Search',
          'About Music'
        ]}
      />
    </Toolbar>
  </>
);

export default MenuBar;
