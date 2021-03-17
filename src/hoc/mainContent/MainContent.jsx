import Box from '@material-ui/core/Box';
import React from 'react';
import useStyles from '../../assets/js/MainContent/StyleMainContent';
import Routing from '../../containers/Routing/Routing';

const MainContent = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Routing />
    </Box>
  );
};

export default MainContent;
