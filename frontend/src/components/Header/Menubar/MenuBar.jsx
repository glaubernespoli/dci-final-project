import { Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Explore from './Explore';
import Music from './Music';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row'
  }
});

const MenuBar = () => {
  const classes = useStyles();

  return (
    <>
      <Toolbar className={classes.root}>
        <Music
          title="Music"
          subTitles={['New Release']}
          subFormats={['LP', 'CD', 'Viynl', 'Tape', 'DVD']}
          subStyles={['Jazz', 'Blues', 'Rock', 'Pop', 'Funk']}
        />
        <Explore
          title="Explore"
          subExplores={['Popular Release', 'Recent Release', 'About Music']}
        />
      </Toolbar>
    </>
  );
};

export default MenuBar;
