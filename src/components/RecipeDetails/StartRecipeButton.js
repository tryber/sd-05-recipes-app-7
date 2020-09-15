import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes')) || {
  meals: [],
  cocktails: [],
};

function mapIngredients(recipe) {
  const validKeys = Object.keys(recipe).filter(
    (key) => key.includes('Ingredient') && recipe[key] !== '' && recipe[key] !== null,
  );

  return validKeys.map((key) => recipe[key]);
}

function StartRecipeButton(props) {
  const { pathname } = props.url.location;
  const { id } = props.url.match.params;
  const { foodRecipe, drinkRecipe } = props;
  const isFood = drinkRecipe === undefined;

  function checkDoneRecipes() {
    return doneRecipes.some((recipe) => recipe.id === id);
  }

  function checkInProgressRecipes() {
    return isFood
      ? Object.keys(inProgressRecipes.meals).some((key) => id === key)
      : Object.keys(inProgressRecipes.cocktails).some((key) => id === key);
  }

  const addRecipe = () => {
    let updatedRecipesInProgress = {};

    if (isFood) {
      updatedRecipesInProgress = {
        ...inProgressRecipes,
        meals: {
          ...inProgressRecipes.meals,
          [foodRecipe.idMeal]: mapIngredients(foodRecipe),
        },
      };
    } else {
      updatedRecipesInProgress = {
        ...inProgressRecipes,
        cocktails: {
          ...inProgressRecipes.cocktails,
          [drinkRecipe.idDrink]: mapIngredients(drinkRecipe),
        },
      };
    }
    localStorage.setItem('inProgressRecipes', JSON.stringify(updatedRecipesInProgress));
  }

  return !checkDoneRecipes() ? (
    <Link to={`${pathname}/in-progress`}>
      {checkInProgressRecipes() ? (
        <button data-testid="start-recipe-btn" className="btn-recipe">
          Continuar Receita
        </button>
      ) : (
        <button data-testid="start-recipe-btn" className="btn-recipe" onClick={() => addRecipe()}>
          Iniciar Receita
        </button>
      )}
    </Link>
  ) : null;
}

export default StartRecipeButton;

StartRecipeButton.defaultProps = {
  foodRecipe: undefined,
  drinkRecipe: undefined,
};

StartRecipeButton.propTypes = {
  url: PropTypes.shape({
    location: PropTypes.string.isRequired,
    match: PropTypes.shape({
      params: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  foodRecipe: PropTypes.instanceOf(Object),
  drinkRecipe: PropTypes.instanceOf(Object),
};
