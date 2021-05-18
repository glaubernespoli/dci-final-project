import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import InfoStyle from './Information.style';

export default function FixedContainer() {
  const classes = InfoStyle();
  return (
    <>
      <Paper>
        <Grid container className={classes.root}>
          <Grid item xs={12} sm={6}>
            <img
              src="https://www.discogs.com/images/app/phones.png"
              alt="googleplay"
              className={classes.imagePhone}
            />
          </Grid>
          <Grid
            container
            xs={12}
            sm={6}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h6">
                Next!
                <em> Download SYR App </em>
                Here!
              </Typography>
            </Grid>
            <Grid item className={classes.imageIconContainer}>
              <img
                src="https://www.discogs.com/images/app/google-play-badge.png"
                alt="googleplay icon"
                className={classes.imageIcon}
              />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
