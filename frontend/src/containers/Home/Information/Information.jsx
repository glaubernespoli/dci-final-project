import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import InfoStyle from './Information.style';

export default function FixedContainer() {
  const classes = InfoStyle();
  return (
    <>
      <Paper>
        <Grid container direction="column" alignItems="center" className={classes.root}>
          <Grid item xs={12}>
            <img
              src="https://www.discogs.com/images/app/phones.png"
              alt="googleplay"
              className={classes.imagePhone}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" textAlign="center">
              Next!
              <em> Download SYR App </em>
              Here!
            </Typography>
            <img
              src="https://www.discogs.com/images/app/google-play-badge.png"
              alt="googleplay icon"
              className={classes.imageGooglePlay}
            />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
