import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FoodContext from '../FoodContext';

function FoodProvider({ children }) {
  const [searchText, setSearchText] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [foods, setFoods] = useState([]);

  const toggleLoading = () => setLoading(!loading);

  const requestFoods = (data) => setFoods(data);

  const updateSearchText = (event) => setSearchText(event.target.value);

  const updateSelectedFilter = (event) => setSelectedFilter(event.target.value);

  const contextValue = {
    loading,
    toggleLoading,
    foods,
    requestFoods,
    searchText,
    updateSearchText,
    selectedFilter,
    updateSelectedFilter,
  };

  return <FoodContext.Provider value={contextValue}>{children}</FoodContext.Provider>;
}

export default FoodProvider;

FoodProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
