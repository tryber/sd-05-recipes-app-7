import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DrinkContext from '../DrinkContext';

function DrinkProvider({ children }) {
  const [searchText, setSearchText] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [drinks, setDrinks] = useState([]);

  const toggleLoading = () => setLoading(!loading);

  const requestDrinks = (data) => setDrinks(data);

  const updateSearchText = (event) => setSearchText(event.target.value);

  const updateSelectedFilter = (event) => setSelectedFilter(event.target.value);

  const contextValue = {
    loading,
    toggleLoading,
    drinks,
    requestDrinks,
    searchText,
    updateSearchText,
    selectedFilter,
    updateSelectedFilter,
  };

  return <DrinkContext.Provider value={contextValue}>{children}</DrinkContext.Provider>;
}

export default DrinkProvider;

DrinkProvider.propTypes = {
  children: PropTypes.node.isRequired,
};