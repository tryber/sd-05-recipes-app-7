import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const FoodContext = createContext();

function FoodProvider({ children }) {
  return <FoodContext.Provider>{children}</FoodContext.Provider>;
}

export default FoodProvider;

FoodProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
