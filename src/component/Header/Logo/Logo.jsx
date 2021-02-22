import { Button, Typography } from '@material-ui/core';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import React from 'react';

// const useStyles = makeStyles({
//   tool: {
//     display: 'flex',
//     justifyContent: 'space-around',
//   },
//   Typography: {
//     padding: '.5rem 1rem ',
//     fontWeight: 'bolder',
//   },
//   icon: {
//     padding: '.5rem',
//     borderRadius: '.25rem',
//   },
// });

const Logo = () => (
  <div>
    <Button variant="contained" color="primary">
      <MusicVideoIcon />
    </Button>
    <Typography variant="h6" color="secondary">
      S-Y-R
    </Typography>
  </div>
);

export default Logo;
