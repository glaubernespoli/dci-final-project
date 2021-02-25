import { Box, Button, Paper, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const Item = ({ item }) => (
  <Paper>
    <Box mb={20}>
      <Typography align="center" gutterBottom variant="h3">
        {item.name}
      </Typography>
    </Box>
    <Box mt={20}>
      <Typography align="center" gutterBottom paragraph variant="caption">
        {item.description}
      </Typography>
    </Box>

    <Button fullWidth size="large" color="primary" variant="contained">
      Check it out!
    </Button>
  </Paper>
);

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
