import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import HeaderStyles from '../HeaderStyles';

const Search = () => {
  const classes = HeaderStyles();

  return (
    <form className={classes.search} noValidate autoComplete="on">
      <TextField
        id="outlined-basic"
        label="Search Your Music"
        variant="outlined"
        placeholder="Search Your Music"
      />
      <SearchIcon className={classes.searchIcon} />
    </form>
  );
};
export default Search;
