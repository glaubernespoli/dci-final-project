/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchRoute } from '../../../Routing/routes';
import SearchStyle from './Search.style';

const useNavigateParams = () => {
  const navigate = useNavigate();

  return (url, params, page) => {
    navigate({
      pathname: url,
      search: `?q=${params}&page=${page}`
    });
  };
};

const Search = () => {
  const classes = SearchStyle();
  const [searchQuery, setSearchQuery] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [page, setPage] = useState('0');

  // const [searchParams, setSearchParams] = useSearchParams({});

  const navigate = useNavigateParams();

  // const searchItem = useLocation().search;

  /* useEffect(() => {
    if (searchItem) {
      const value = new URLSearchParams(searchItem).get('q');
      const page = new URLSearchParams(searchItem).get('page');
      setSearchParams({
        q: value,
        page
      });
      // setSearch(value);
      // setPageNumber(page);
    } else {
      console.log('test');
    }
  }, []); */

  /* useEffect(() => {
    if (searchParams.search || searchParams.pageNumber) {
      // navigate(SearchRoute, searchParams);
      // capture the values from the url and set the searchParams
    }
  }, [SearchRoute, searchParams]); */

  /*   useEffect(() => {
    getData(search)
      .then((response) => {
        setRecords(response.result);
      })
      .catch((err) => {
        console.log(err.status);
      });
  }, [SearchRoute, pageNumber]); */

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // setSearchParams({ q: searchQuery });
      navigate(SearchRoute, searchQuery, page);
    }
  };

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>

      <InputBase
        placeholder="Search Your Records.."
        id="search"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        inputProps={{ 'aria-label': 'search' }}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};
export default Search;
