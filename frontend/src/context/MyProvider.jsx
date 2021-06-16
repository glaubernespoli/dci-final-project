import PropTypes from 'prop-types';
import React, { useState } from 'react';
import MyContext from './MyContext';

const MyProvider = ({ children }) => {
  const [search, setSearch] = useState('Pop');
  const [records, setRecords] = useState([]);

  return (
    <MyContext.Provider value={{ search, setSearch, records, setRecords }}>
      {children}
    </MyContext.Provider>
  );
};

MyProvider.defaultProps = {
  children: {}
};
MyProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.object)
};
export default MyProvider;
