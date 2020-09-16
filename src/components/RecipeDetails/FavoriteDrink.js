import React, { useState } from 'react';
import PropTypes from 'prop-types';

import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

const selectedDrink = (drink) => ({
  id: drink.idDrink,
  type: 'bebida',
  area: drink.strArea || '',
  category: drink.strCategory || '',
  alcoholicOrNot: drink.strAlcoholic || '',
  name: drink.strDrink,
  image: drink.strDrinkThumb,
});

function FavoriteDrink(props) {
  const { recipe } = props;
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  const recipeIndex = favoriteRecipes.findIndex((item) => item.id === recipe.idDrink);
  const [isFavorite, setIsFavorite] = useState(
    favoriteRecipes.some((item) => recipe.idDrink === item.id),
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
      updateFavoriteRecipes = [...favoriteRecipes, selectedDrink(recipe)];
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

export default FavoriteDrink;

FavoriteDrink.propTypes = {
  recipe: PropTypes.instanceOf(Object).isRequired,
};
