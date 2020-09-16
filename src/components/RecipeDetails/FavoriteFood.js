import React, { useState } from 'react';
import PropTypes from 'prop-types';

import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

const selectedMeal = (meal) => ({
  id: meal.idMeal,
  type: 'comida',
  area: meal.strArea || '',
  category: meal.strCategory || '',
  alcoholicOrNot: '',
  name: meal.strMeal,
  image: meal.strMealThumb,
});

function FavoriteFood(props) {
  const { recipe } = props;
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  const recipeIndex = favoriteRecipes.findIndex((item) => item.id === recipe.idMeal);
  const [isFavorite, setIsFavorite] = useState(
    favoriteRecipes.some((item) => recipe.idMeal === item.id),
  );

  // https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns
  const toggleFavorite = () => {
    let updateFavoriteRecipes = [];
    if (isFavorite) {
      updateFavoriteRecipes = [
        ...favoriteRecipes.slice(0, recipeIndex),
        ...favoriteRecipes.slice(recipeIndex + 1),
      ];
    } else {
      updateFavoriteRecipes = [...favoriteRecipes, selectedMeal(recipe)];
    }
    setIsFavorite((prevFavorite) => !prevFavorite);
    localStorage.setItem('favoriteRecipes', JSON.stringify(updateFavoriteRecipes));
  };

  return (
    <input
      type="image"
      src={isFavorite ? blackHeartIcon : whiteHeartIcon}
      alt="Favorite Button"
      data-testid="favorite-btn"
      onClick={() => toggleFavorite()}
    />
  );
}

export default FavoriteFood;

FavoriteFood.propTypes = {
  recipe: PropTypes.instanceOf(Object).isRequired,
};
