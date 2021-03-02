import { Container, Paper, Typography } from '@material-ui/core';
import React from 'react';
import InfoStyle from './InfoStyle';

export default function FixedContainer() {
  const classes = InfoStyle();
  return (
    <>
      <Paper>
        <Container fixed className={classes.root}>
          <Typography variant="h2" color="inherit" align="center" className={classes.info}>
            We have not decided Yet?
          </Typography>
        </Container>
      </Paper>
    </>
  );
}
