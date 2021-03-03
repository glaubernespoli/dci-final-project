import Box from '@material-ui/core/Box';
import React from 'react';
import Routing from '../Routing/Routing';
import useStyles from './StyleMainContent';

const MainContent = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Routing />
    </Box>
  );
};

export default MainContent;
