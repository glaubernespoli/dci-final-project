import PropTypes from 'prop-types';
import React, { useState } from 'react';
import MyContext from './MyContext';

const MyProvider = (props) => {
  const { children } = props;
  const [item, setItem] = useState([]);

  return <MyContext.Provider value={{ item, setItem }}>{children}</MyContext.Provider>;
};

MyProvider.defaultProps = {
  children: {}
};

MyProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.object)
};

export default MyProvider;
