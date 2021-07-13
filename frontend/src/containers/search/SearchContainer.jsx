/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { Grid, Paper, Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSearchParams } from 'react-router-dom';
import NoContent from './NoContent';
import SearchItem from './SearchItem';
import useStyles from './SearchList.style';

const SearchContainer = () => {
  const classes = useStyles();

  const [searchParams, setSearchParams] = useSearchParams({});
  const q = searchParams.get('q');
  const page = searchParams.get('page') || 0;

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const result = await axios.request({
          method: 'get',
          url: '/record/s',
          params: {
            q,
            page
          }
        });
        setData(result.data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [q, page]);

  // useeffect
  // keep track on page and q

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <div>
        <p>{error.message}</p>
      </div>
    );
  }

  console.log(data.paging);

  const changePage = ({ selected }) => {
    // here you update the url
    // setPageNumber(selected);
    setSearchParams({
      q,
      page: selected
    });

    // useeffect
    // keep track on page and q
  };

  if (!Array.isArray(data.data) || !data.data.length) {
    return (
      <>
        <NoContent />
      </>
    );
  }

  return (
    <>
      <Paper elevation={5} className={classes.paper}>
        <Grid container className={classes.typography}>
          <Typography variant="h3">Search Results.....</Typography>
        </Grid>
        <Grid container spacing={4} justifyContent="center" className={classes.container}>
          {data.data.map((record) => (
            <SearchItem key={record.id} item={record} />
          ))}
        </Grid>
      </Paper>
      <ReactPaginate
        previousLabel="previous"
        nextLabel="next"
        activePage={data.paging.page}
        forcePage={data.paging.page}
        pageCount={data.paging.pages}
        onPageChange={changePage}
        containerClassName={classes.paginationBttns}
        previousLinkClassName={classes.previousBttn}
        nextLinkClassName={classes.nextBttn}
        disabledClassName={classes.paginationDisabled}
        activeClassName={classes.paginationActive}
        forceClassName={classes.paginationActive}
      />
    </>
  );
};

export default SearchContainer;
