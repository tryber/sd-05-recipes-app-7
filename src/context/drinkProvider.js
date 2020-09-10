import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const DrinkContext = createContext();

function DrinkProvider({ children }) {
  return <DrinkContext.Provider>{children}</DrinkContext.Provider>;
}

export default DrinkProvider;

DrinkProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
