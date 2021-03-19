import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';
import useStyles from './Slogan.style';

export default function ImgContainer() {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.img1}>
        <Box className={classes.txt}>
          <Typography variant="overline" className={classes.border}>
            About Us...
            <Typography variant="overline" className={classes.quote}>
              Music is the universal language of Mankind
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
