import React from 'react';

const FoodInProgress = () => <h1>{localStorage.getItem('inProgressRecipes')}</h1>;

export default FoodInProgress;
