/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import React, { useContext, useEffect } from 'react';
import { generatePath, useLocation, useNavigate } from 'react-router-dom';
import MyContext from '../../../context/MyContext';
import { SearchRoute } from '../../../Routing/routes';
// import getData from '../ApiSearch';
import SearchStyle from './Search.style';

const useNavigateParams = () => {
  const navigate = useNavigate();

  return (url, params) => {
    const path = generatePath(':url?:queryString', {
      url,
      queryString: params
    });
    navigate(path);
  };
};

const Search = () => {
  const classes = SearchStyle();
  const context = useContext(MyContext);
  const { setSearch, search, /* setRecords,  */ pageNumber, setPageNumber } = context;

  const navigate = useNavigateParams();

  const searchItem = useLocation().search;

  useEffect(() => {
    if (searchItem) {
      const value = new URLSearchParams(searchItem).get('q');
      const page = new URLSearchParams(searchItem).get('page');
      setSearch(value);
      setPageNumber(page);
    } else {
      console.log('test');
    }
  }, []);

  useEffect(() => {
    if (search || pageNumber) {
      navigate(SearchRoute, `q=${search}&page=${pageNumber}`);
    }
  }, [SearchRoute, pageNumber]);

  /*   useEffect(() => {
    getData(search)
      .then((response) => {
        setRecords(response.result);
      })
      .catch((err) => {
        console.log(err.status);
      });
  }, [SearchRoute, pageNumber]); */

  /*  const handleChange = (event) => {
    setSearch(event.target.value);
  };
 */
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      navigate(SearchRoute, `q=${search}&page=${pageNumber}`);
    }
    setSearch(event.target.value.trim());

    /*    getData(search)
      .then((response) => {
        setRecords(response.result);
      })
      .catch((err) => {
        console.log(err.status);
      }); */
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
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};
export default Search;
