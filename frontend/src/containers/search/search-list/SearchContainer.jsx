import React, { useContext, useState } from 'react';
import ReactPaginate from 'react-paginate';
import MyContext from '../../../context/MyContext';
import Records from './APISearch';
import SearchItem from './SearchItem';
import useStyles from './SearchList.style';

const SearchContainer = () => {
  const classes = useStyles();
  const { search } = useContext(MyContext);
  // const Records = await axios.get('http:localhost:5000/records');
  const filteredRecords = Records.filter(
    /*   (record) =>
      record.style.toLowerCase === search.toLowerCase ||
      record.format.toLowerCase === search.toLowerCase */ /* ---check this eslint rules */
    (record) => record.style === search || record.format === search
  );

  const [pageNumber, setPageNumber] = useState(0);
  const recorsPerPage = 4;
  const pagesVisited = pageNumber * recorsPerPage;
  const displayRecords = filteredRecords.slice(pagesVisited, pagesVisited + recorsPerPage);
  const pageCount = Math.ceil(filteredRecords.length / recorsPerPage);
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
