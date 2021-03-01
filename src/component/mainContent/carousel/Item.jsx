import { Button, Grid, Paper, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import useStyles from './StyleCarousel';

const Item = ({ item }) => {
  const classes = useStyles();
  return (
    <Paper elevation={5}>
      <Grid container direction="column" justifyContent="space-between" className={classes.root}>
        <Grid item>
          <Typography align="center" gutterBottom variant="h3">
            {item.name}
          </Typography>
        </Grid>

        <Grid item>
          <Typography align="center" gutterBottom paragraph variant="caption">
            {item.description}
          </Typography>
        </Grid>

        <Grid item>
          <Button fullWidth size="large" color="primary" variant="contained">
            Check it out!
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

Item.defaultProps = {
  item: {
    name: 'Error in Name',
    description: 'Error in Description'
  }
};

Item.propTypes = {
  item: PropTypes.objectOf(PropTypes.object)
};

export default Item;
