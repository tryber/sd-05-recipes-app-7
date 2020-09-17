import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { fetchFoodId } from '../services/fetchFoods';
import IngredientChecklist from '../components/RecipeInProgress/IngredientChecklist';
import ShareButton from '../components/RecipeDetails/ShareButton';
import FavoriteFood from '../components/RecipeDetails/FavoriteFood';

function FoodInProgress(props) {
  const { id } = props.match.params;
  const [singleFood, setSingleFood] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // const inProgressFood = JSON.parse(localStorage.getItem('inProgressRecipes')).meals[id] || [];

  useEffect(() => {
    fetchFoodId(id).then((data) => {
      setSingleFood(data);
      setIsLoading(false);
    });
  }, []);

  return isLoading || !singleFood ? (
    <section>Loading...</section>
  ) : (
    <section>
      <img src={singleFood.strMealThumb} alt="Meal" data-testid="recipe-photo" />
      <h1 data-testid="recipe-title">{singleFood.strMeal}</h1>
      <ShareButton />
      <FavoriteFood recipe={singleFood} />
      <h2 data-testid="recipe-category">{singleFood.strCategory}</h2>
      <h3>Ingredients</h3>
      <IngredientChecklist singleItem={singleFood} />
      <p data-testid="instructions">{singleFood.strInstructions}</p>
      <Link to="/receitas-feitas">
        <button data-testid="finish-recipe-btn">
          Finalizar Receita
        </button>
      </Link>
    </section>
  );
}

export default FoodInProgress;

FoodInProgress.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};
