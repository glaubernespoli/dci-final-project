import { Button, Toolbar } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import React from 'react';
import Explore from './Explore';
import Music from './Music';

const MenuBar = () => (
  <div>
    <Toolbar>
      <Button color="inherit">
        <HomeIcon style={{ fontSize: '1.5rem' }} />
      </Button>
      <Music />
      <Explore />
    </Toolbar>
  </div>
);

export default MenuBar;
