import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles/RecipeDetails.css';

import { fetchDrinkId } from '../services/fetchDrinks';
import IngredientList from '../components/RecipeDetails/IngredientList';
import FoodCarousel from '../components/RecipeDetails/FoodCarousel';
import ShareButton from '../components/RecipeDetails/ShareButton';
import FavoriteDrink from '../components/RecipeDetails/FavoriteDrink';
import StartRecipeButton from '../components/RecipeDetails/StartRecipeButton';

function DrinkDetails(props) {
  const { id } = props.match.params;
  const [singleDrink, setSingleDrink] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDrinkId(id).then((data) => {
      setSingleDrink(data);
      setLoading(false);
    });
  }, []);

  const youtubeURL = () => String(singleDrink.strVideo).replace('watch?v=', 'embed/');

  return loading || !singleDrink ? (
    <section>Loading...</section>
  ) : (
    <div>
      <img src={singleDrink.strDrinkThumb} data-testid="recipe-photo" alt="Drink" />
      <ShareButton />
      <FavoriteDrink recipe={singleDrink} />
      <h1 data-testid="recipe-title">{singleDrink.strDrink}</h1>
      <h3 data-testid="recipe-category">
        {singleDrink.strCategory}
        {singleDrink.strAlcoholic}
      </h3>
      <IngredientList singleItem={singleDrink} />
      <p data-testid="instructions">{singleDrink.strInstructions}</p>
      {singleDrink.strVideo ? (
        <iframe width="420" height="315" src={youtubeURL()} data-testid="video" />
      ) : null}
      <FoodCarousel />
      <StartRecipeButton url={props} drinkRecipe={singleDrink} />
    </div>
  );
}

export default DrinkDetails;

DrinkDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};
