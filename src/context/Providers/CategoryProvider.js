import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CategoryContext from '../CategoryContext';

const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState('');

  const selectCategory = (e) => {
    if (e.target.name === category) {
      setCategory('All');
    } else { 
      setCategory(e.target.name);
    }
  };

  const ContextValue = {
    category,
    selectCategory,
  };

  return (
    <CategoryContext.Provider value={ContextValue}>
      {children}
    </CategoryContext.Provider>
  );
};

CategoryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CategoryProvider;
