import PropTypes from 'prop-types';
import React, { useState } from 'react';
import MyContext from './MyContext';

const MyProvider = ({ children }) => {
  const [item, setItem] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [CartItemPage, setCartItemPage] = useState([]);

  return (
    <MyContext.Provider
      value={{ item, cartItems, CartItemPage, setItem, setCartItems, setCartItemPage }}
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
