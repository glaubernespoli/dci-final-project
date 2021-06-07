import React, { useState } from 'react';
import MyContext from './MyContext';

const MyProvider = (props) => {
  const { children } = props;
  const [search, setSearch] = useState('CD');
  return <MyContext.Provider value={{ search, setSearch }}>{children}</MyContext.Provider>;
};

export default MyProvider;
