import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';
import useStyles from './GalleryStyle';

export default function ImgGallery() {
  const classes = useStyles();

  return (
    <Box>
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
      </Box>
    </Box>
  );
}
