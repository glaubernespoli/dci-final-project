import { Toolbar } from '@material-ui/core';
import React from 'react';
import Explore from './Explore';
import Music from './Music';

const MenuBar = () => (
  <>
    <Toolbar>
      <Music
        title="Music"
        subTitles={['New Release']}
        subFormats={['LP', 'CD', 'Vynl', 'Tape', 'DVD']}
        subStyles={['Jazz', 'Blues', 'Rock', 'Pop', 'Funk']}
      />
      <Explore title="Explore" subExplores={['Popular Release', 'Recent Release', 'About Music']} />
    </Toolbar>
  </>
);

export default MenuBar;
