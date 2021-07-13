/* eslint-disable no-console */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import MyContext from './MyContext';

const MyProvider = ({ children }) => {
  const [search, setSearch] = useState('');

  return <MyContext.Provider value={{ search, setSearch }}>{children}</MyContext.Provider>;
};

MyProvider.defaultProps = {
  children: {}
};

MyProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.symbol, PropTypes.object])
};

export default MyProvider;
