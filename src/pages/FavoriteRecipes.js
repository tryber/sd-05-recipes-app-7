import React from 'react';
import RecipesFavorited from '../components/FavoriteRecipes/RecipesFavorited';
import SearchLessHeader from '../components/Header/SearchlessHeader';

const FavoriteRecipes = () => (
  <div>
    <SearchLessHeader title={'Receitas Favoritas'} />
    <RecipesFavorited />
  </div>
);

export default FavoriteRecipes;
