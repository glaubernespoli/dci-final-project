/* eslint-disable no-console */
import React, { useContext, useState } from 'react';
import ReactPaginate from 'react-paginate';
import MyContext from '../../../context/MyContext';
import SearchItem from './SearchItem';
import useStyles from './SearchList.style';

const SearchContainer = () => {
  const classes = useStyles();
  const { records } = useContext(MyContext);
  // const [page, setPage] = useState(0);
  // receive the context of the menubar--

  // useeffect
  // search --menu onclick naviagtion

  /*  useEffect(() => {
    // make a count query on the backend --
    // the backend should return an object with the total amount of items AND
    // the total items per page
    // set total items in a variable
  }, []); */

  /*
  useEffect(() => {
    // this one is attached to the page state and will be called everytime it changes its value.
    // here we make the call to the findBy()
  }, [page]); */

  const [pageNumber, setPageNumber] = useState(0);
  const recordsPerpage = 5;
  const pagesVisited = pageNumber * recordsPerpage;
  const displayRecords = records.slice(pagesVisited, pagesVisited + recordsPerpage);
  const pageCount = Math.ceil(records.length / recordsPerpage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

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
