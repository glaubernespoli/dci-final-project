import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';
import useStyles from './AchievementsStyle';
import Gallery from './ImgContainer/ImgGallery/ImgGallery';

export default function ImgContainerFooter() {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.img3}>
        <Box className={(classes.section, classes.sec2)}>
          <Typography variant="h4">Achievements</Typography>

          <Box className={classes.infoContainer}>
            <Box className={classes.content}>
              <Typography variant="p">
                Music brings joy, to all of our hearts, It is one of those, emotional arts. Sounds
                of melodies, that we truly adore, Brings us pure pleasure, as our spirits do soar.
                Music that touches us, we cant help but smile, We are free to choose, genre or
                style. Music clearly, enlightens our days, Makes us happy, in so many ways.
              </Typography>
            </Box>
            <Box className={classes.imgContent} />
          </Box>
        </Box>
      </Box>
      <Gallery />
    </Box>
  );
}
