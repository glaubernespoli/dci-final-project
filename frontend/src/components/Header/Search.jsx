import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import MyContext from '../../context/MyContext';
import { SearchRoute } from '../../Routing/routes';
// import { Link as RouterLink } from 'react-router-dom';
import SearchStyle from './Search.style';

const Search = () => {
  const classes = SearchStyle();
  const context = useContext(MyContext);
  const { setSearch } = context;
  const history = useHistory();

  // const handleChange = (event) => {
  //   setSearch(event.target.value);
  // };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') history.push(SearchRoute);
    setSearch(event.target.value.trim());

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
    </div>
  );
};
export default Search;
