/* eslint-disable no-console */
import CircularProgress from '@material-ui/core/CircularProgress';
import React, { useContext } from 'react';
import ReactPaginate from 'react-paginate';
import MyContext from '../../../context/MyContext';
import { useAxios } from '../../../hooks/useAxios';
import NoContent from './NoContent';
import SearchItem from './SearchItem';
import useStyles from './SearchList.style';

const SearchContainer = () => {
  const classes = useStyles();
  const context = useContext(MyContext);
  const { search, pageNumber, setPageNumber, records } = context;
  const { data, error, isLoading } = useAxios('get', '/record/s', {
    params: {
      name: search
    }
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <div>
        <p>{error.message}</p>
      </div>
    );
  }

  console.log(data.response);

  const recordsPerpage = 5;
  const pagesVisited = pageNumber * recordsPerpage;
  const displayRecords = records.slice(pagesVisited, pagesVisited + recordsPerpage);
  const pageCount = Math.ceil(records.length / recordsPerpage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  if (!Array.isArray(displayRecords) || !displayRecords.length) {
    return (
      <>
        <NoContent />
      </>
    );
  }

  return (
    <>
      {displayRecords.map((record) => (
        <SearchItem key={record.id} item={record} />
      ))}

      <ReactPaginate
        previousLabel="previous"
        nextLabel="next"
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={classes.paginationBttns}
        previousLinkClassName={classes.previousBttn}
        nextLinkClassName={classes.nextBttn}
        disabledClassName={classes.paginationDisabled}
        activeClassName={classes.paginationActive}
      />
    </>
  );
};

export default SearchContainer;
