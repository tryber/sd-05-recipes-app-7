import React, { useEffect, useState } from 'react';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import FavoritedFoodCard from '../Cards/FavoritedFoodCard';
import FavoriteDrinkCard from '../Cards/FavoritedDrinkCard';

const copy = require('clipboard-copy');

function copyToClipboard(type, id) {
  const text = `http://localhost:3000/${type}/${id}`;
  copy(text);
  document.getElementById('share-button').innerHTML = 'Link copiado!';
}

const filterButtons = (setFilterType) => (
  <div>
    <button
      value="all"
      data-testid="filter-by-all-btn"
      onClick={(event) => setFilterType(event.target.value)}
    >
      All
    </button>
    <button
      value="comida"
      data-testid="filter-by-food-btn"
      onClick={(event) => setFilterType(event.target.value)}
    >
      Food
    </button>
    <button
      value="bebida"
      data-testid="filter-by-drink-btn"
      onClick={(event) => setFilterType(event.target.value)}
    >
      Drink
    </button>
  </div>
);

const removeFavorite = (id, favoriteRecipes, setDisplayRecipes, setFavoriteRecipes) => {
  const recipeIndex = favoriteRecipes.findIndex((recipe) => recipe.id === id);
  const updateFavoriteRecipes = [
    ...favoriteRecipes.slice(0, recipeIndex),
    ...favoriteRecipes.slice(recipeIndex + 1),
  ];
  setFavoriteRecipes(updateFavoriteRecipes);
  localStorage.setItem('favoriteRecipes', JSON.stringify(updateFavoriteRecipes));
  setDisplayRecipes(updateFavoriteRecipes);
};

const RecipesFavorited = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState(
    JSON.parse(localStorage.getItem('favoriteRecipes')) || [],
  );
  const [displayRecipes, setDisplayRecipes] = useState(favoriteRecipes);
  const [filterType, setFilterType] = useState('all');

  useEffect(() =>
    setDisplayRecipes([
      ...favoriteRecipes.filter((recipe) =>
        (filterType !== 'all' ? recipe.type === filterType : true),
      )]), [filterType]);

  return (
    <div>
      {filterButtons(setFilterType)}
      {displayRecipes.map((recipe, index) => {
        if (recipe.type === 'comida') {
          return (
            <div>
              <FavoritedFoodCard food={recipe} index={index} copyToClipboard={copyToClipboard} />
              <input
                type="image" src={blackHeartIcon} alt="Favorite Button"
                data-testid={`${index}-horizontal-favorite-btn`}
                onClick={() =>
                  removeFavorite(recipe.id, favoriteRecipes, setDisplayRecipes, setFavoriteRecipes)
                }
              />
            </div>
          );
        }
        return (
          <div>
            <FavoriteDrinkCard drink={recipe} index={index} copyToClipboard={copyToClipboard} />
            <input
              type="image" src={blackHeartIcon} alt="Favorite Button"
              data-testid={`${index}-horizontal-favorite-btn`}
              onClick={() =>
                removeFavorite(recipe.id, favoriteRecipes, setDisplayRecipes, setFavoriteRecipes)
              }
            />
          </div>
        );
      })}
    </div>
  );
};

export default RecipesFavorited;
