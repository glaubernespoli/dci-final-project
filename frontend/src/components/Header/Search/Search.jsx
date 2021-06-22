/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';
import MyContext from '../../../context/MyContext';
import { SearchRoute } from '../../../Routing/routes';
import getData from '../ApiSearch';
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
  const { setSearch, search, setRecords, pageNumber } = context;
  const [searchTerms, setSearchTerms] = useState([]);
  const searchTerm = [];

  const navigate = useNavigateParams();

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handlePageLoad = async () => {
    try {
      const response = await axios.get('http://localhost:5000/record', {});
      const records = response.data;
      records.map((record) => {
        searchTerm.push(record.name);
        searchTerm.push(record.artist);
        searchTerm.push(record.format);
        searchTerm.push(record.style);
        setSearchTerms(searchTerm);
        return searchTerms;
      });

      console.log(searchTerms);
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      navigate(SearchRoute, `q=${search}&page=${pageNumber}`);
    }
    setSearch(event.target.value.trim());

    getData(search)
      .then((response) => {
        setRecords(response.result);
      })
      .catch((err) => {
        console.log(err.status);
      });
  };
  /*
  useEffect(() => {
    const urlString = window.location;
    const url = new URL(urlString);
    const name = url.searchParams.get('q');
    const page = url.searchParams.get('page');
    setSearch(name);
    setPageNumber(page);
  }, []); */
  // const [t] = useState(localStorage.getItem('searcht'));

  /*  useEffect(() => {

    https://reactgo.com/react-get-query-params/
    const { search } = useLocation();
    const page = new URLSearchParams(search).get('page');
    console.log(search);
    console.log(page);
  }, [search, pageNumber]); */

  useEffect(() => {
    if (search || pageNumber) {
      navigate(SearchRoute, `q=${search}&page=${pageNumber}`);
    }
  }, [SearchRoute, pageNumber]);

  useEffect(() => {
    getData(search)
      .then((response) => {
        setRecords(response.result);
      })
      .catch((err) => {
        console.log(err.status);
      });
  }, [SearchRoute, pageNumber]);

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>

      {/*  <Autocomplete
        id="combo-box-demo"
        options={[
          { title: 'The Shawshank Redemption', year: 1994 },
          { title: 'The Godfather', year: 1972 },
          { title: 'The Godfather: Part II', year: 1974 },
          { title: 'The Dark Knight', year: 2008 }
        ]}
        getOptionLabel={(option) => option.title}
        style={{ width: 300 }}
        renderInput={(params) => {
          const { InputLabelProps, InputProps, ...rest } = params;
          return (
            <InputBase
              {...{ InputProps }}
              {...{ rest }}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              onClick={handlePageLoad}
            />
          );
        }}
      /> */}
      <InputBase
        placeholder="Search Your Records.."
        id="search"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        inputProps={{ 'aria-label': 'search' }}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        onClick={handlePageLoad}
      />
    </div>
  );
};
export default Search;
