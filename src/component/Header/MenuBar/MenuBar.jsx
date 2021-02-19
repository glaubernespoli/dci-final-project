import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from '@material-ui/icons/Home';
import React from 'react';
import Explore from './Explore';
import Music from './Music';

const MenuBar = () => (
  <div>
    <Toolbar>
      <Button color="inherit">
        <HomeIcon />
      </Button>
      <Music />
      <Explore />
    </Toolbar>
  </div>
);

export default MenuBar;
