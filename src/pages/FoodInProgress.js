import React, { useEffect, useState } from 'react';

import { fetchFoodId } from '../services/fetchFoods';
import IngredientChecklist from '../components/RecipeInProgress/IngredientChecklist';
import ShareButton from '../components/RecipeDetails/ShareButton';
import FavoriteFood from '../components/RecipeDetails/FavoriteFood';

function FoodInProgress(props) {
  const { id } = props.match.params;
  const [singleFood, setSingleFood] = useState(false);
  const [loading, setLoading] = useState(true);
  // const inProgressFood = JSON.parse(localStorage.getItem('inProgressRecipes')).meals[id] || [];

  useEffect(() => {
    fetchFoodId(id).then((data) => {
      setSingleFood(data);
      setLoading(false);
    });
  }, []);

  return loading || !singleFood ? (
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
      <button data-testid="finish-recipe-btn">Finalizar Receita</button>
    </section>
  );
}

export default FoodInProgress;
