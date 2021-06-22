/* eslint-disable no-console */
import React, { useContext } from 'react';
import ReactPaginate from 'react-paginate';
import MyContext from '../../../context/MyContext';
import NoContent from './NoContent';
import SearchItem from './SearchItem';
import useStyles from './SearchList.style';

const SearchContainer = () => {
  const classes = useStyles();
  const { records, pageNumber, setPageNumber } = useContext(MyContext);
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
