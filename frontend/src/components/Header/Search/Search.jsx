/* eslint-disable no-console */
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../../context/MyContext';
import { SearchRoute } from '../../../Routing/routes';
import getData from '../ApiSearch';
import SearchStyle from './Search.style';

const Search = () => {
  const classes = SearchStyle();
  const context = useContext(MyContext);
  const { setSearch, search, setRecords } = context;

  const navigate = useNavigate();

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') navigate(SearchRoute);
    setSearch(event.target.value.trim());
    getData(search)
      .then((response) => {
        setRecords(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search Your Records.."
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        inputProps={{ 'aria-label': 'search' }}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};
export default Search;
