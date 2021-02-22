import { Button, InputBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as React from 'react';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    margin: '0 .5rem',
  },
  search: {
    border: '1px solid white',
    padding: '.15rem 1rem',
    margin: '0 .75rem',
    backgroundColor: 'white',
    borderRadius: '.15rem',
  },
});

const SearchItem = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.search}>
        <InputBase placeholder="Search Your Music.. " />
      </div>
      <div>
        <Button variant="outlined" color="inherit">
          Search
        </Button>
      </div>
    </div>
  );
};
export default SearchItem;
