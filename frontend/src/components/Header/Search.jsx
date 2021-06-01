import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SearchRoute } from '../../Routing/routes';
// import { Link as RouterLink } from 'react-router-dom';
import SearchStyle from './Search.style';

const Search = () => {
  const classes = SearchStyle();
  const history = useHistory();
  const [searchItem, setsearchItem] = useState('vinyl');

  // const handleChange = (event) => {
  //   setsearchItem(event.target.value);
  // };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') history.push(SearchRoute);
    setsearchItem(event.target.value);

    // send this search value
  };

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        inputProps={{ 'aria-label': 'search' }}
        // onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      {searchItem}
    </div>
  );
};
export default Search;
