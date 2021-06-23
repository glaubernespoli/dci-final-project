/* eslint-disable no-console */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import MyContext from './MyContext';

const MyProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [records, setRecords] = useState([]);
  const [item, setItem] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  return (
    <MyContext.Provider
      value={{ search, setSearch, records, setRecords, item, setItem, pageNumber, setPageNumber }}
    >
      {children}
    </MyContext.Provider>
  );
};

MyProvider.defaultProps = {
  children: {}
};

MyProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.symbol, PropTypes.object])
};

export default MyProvider;
