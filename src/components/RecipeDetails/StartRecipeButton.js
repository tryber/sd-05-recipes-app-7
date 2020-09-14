import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function StartRecipeButton(props) {
  const { pathname } = props.url.location;
  const { id } = props.url.match.params;
  const { foodRecipe, drinkRecipe } = props;

  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));

  function checkRecipes() {
    return doneRecipes.some((recipe) => recipe.id === id);
  }

  function mapIngredients(recipe) {
    const validKeys = Object.keys(recipe).filter(
      (key) => key.includes('Ingredient') && recipe[key] !== '' && recipe[key] !== null,
    );

    return validKeys.map((key) => recipe[key]);
  }

  function addRecipe() {
    const recipesInProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));

    let updatedRecipesInProgress = {};

    if (drinkRecipe === undefined) {
      updatedRecipesInProgress = {
        ...recipesInProgress,
        meals: {
          ...recipesInProgress.meals,
          [foodRecipe.idMeal]: mapIngredients(foodRecipe),
        },
      };
    } else {
      updatedRecipesInProgress = {
        ...recipesInProgress,
        cocktails: {
          ...recipesInProgress.cocktails,
          [drinkRecipe.idDrink]: mapIngredients(drinkRecipe),
        },
      };
    }
    localStorage.setItem('inProgressRecipes', JSON.stringify(updatedRecipesInProgress));
  }

  return (
    <Link to={`${pathname}/in-progress`}>
      {!checkRecipes() ? (
        <button data-testid="start-recipe-btn" className="btn-recipe" onClick={() => addRecipe()}>
          Iniciar Receita
        </button>
      ) : null}
    </Link>
  );
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
