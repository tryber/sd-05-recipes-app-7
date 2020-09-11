import React, { useState } from 'react';
import PropTypes from 'prop-types';
import HeaderContext from '../HeaderContext';

const HeaderProvider = ({ children }) => {
  const [searchBarActive, setSearchBarActive] = useState(false);

  const toggleSearchBar = () => {
    setSearchBarActive((prevState) => !prevState);
  };

  const valueContext = {
    toggleSearchBar,
    searchBarActive,
  };

  return <HeaderContext.Provider value={valueContext}>{children}</HeaderContext.Provider>;
};

HeaderProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderProvider;
