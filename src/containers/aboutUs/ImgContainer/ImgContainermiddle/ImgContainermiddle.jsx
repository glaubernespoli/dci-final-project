import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';
import useStyles from '../../../../assets/js/AboutUs/ImgContainerMiddleStyle/ImgMiddleStyle';

export default function ImgContainerMiddle() {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.img2}>
        <Box className={(classes.section, classes.sec1)}>
          <Typography variant="h4">Our Story</Typography>
          <Box className={classes.infoContainer}>
            <Box className={classes.imgContent}> </Box>
            <Box className={classes.content}>
              <Typography variant="p">
                Where words fail, music speaks. It speaks of the pain, of the sorrow, of the lost,
                of the life we live. It shares emotions. It is a way to connect, to understand what
                others feel. Where words fail, music speaks. It tells the truth whether you want it
                to or not. Music shares the souls of those we are around, of those in the world that
                we are living.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
