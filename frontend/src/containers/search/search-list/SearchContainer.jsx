import React, { useContext, useState } from 'react';
import ReactPaginate from 'react-paginate';
import MyContext from '../../../context/MyContext';
import Records from './APISearch';
import SearchItem from './SearchItem';
import useStyles from './SearchList.style';

const SearchContainer = () => {
  const classes = useStyles();
  const { search } = useContext(MyContext);
  // const [page, setPage] = useState(0);
  // receive the context of the menubar--

  // const RecordsDB = axios.get('http:localhost:5000/records/s',{style:search});

  // useeffect
  // search --menu onclick naviagtion

  const filteredRecords = Records.filter(
    /*   (record) =>
      record.style.toLowerCase === search.toLowerCase ||
      record.format.toLowerCase === search.toLowerCase */ /* ---check this eslint rules */
    (record) => record.style === search || record.format === search
  );

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
  const recordsPerpage = 4;
  const pagesVisited = pageNumber * recordsPerpage;
  const displayRecords = filteredRecords.slice(pagesVisited, pagesVisited + recordsPerpage);
  const pageCount = Math.ceil(filteredRecords.length / recordsPerpage);
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
