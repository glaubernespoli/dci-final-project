import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';
import useStyles from './imgStyle';

export default function Text() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.img1}>
        <Box className={classes.txt}>
          <Typography variant="overline" className={classes.border}>
            -- About Us --.
            <Typography variant="overline" className={classes.quote}>
              Music is the universal language of Mankind
            </Typography>
          </Typography>
        </Box>
      </Box>
      {/* <Box className={classes.img2}>
        <Box className={(classes.section, classes.sec1)}>
          <Typography variant="h4">Our Story</Typography>

          <Box className={classes.infoContainer}>
            <Box className={classes.imgContent}>--Text-- </Box>
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
      <Box className={classes.img4}>
        <Typography variant="h4" className={classes.section}>
          Gallery
        </Typography>

        <Box className={(classes.section, classes.sec3, classes.gallery)}>
          <Box className={classes.imgGallery}>Awards 2019</Box>
          <Box className={classes.imgGallery}>Euphoria 2020</Box>
          <Box className={classes.imgGallery}>Musica 2020</Box>
          <Box className={classes.imgGallery}>Event 2019</Box>
        </Box>
      </Box> */}
    </Box>
  );
}
