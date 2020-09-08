import React, { createContext } from 'react';

export const FoodContext = createContext();

function FoodProvider({ children }) {
  return <FoodContext.Provider>{children}</FoodContext.Provider>;
}

export default FoodProvider;
