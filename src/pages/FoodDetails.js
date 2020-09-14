import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './styles/RecipeDetails.css';

import { fetchFoodId } from '../services/fetchFoods';
import IngredientList from '../components/RecipeDetails/IngredientList';
import DrinkCarousel from '../components/RecipeDetails/DrinkCarousel';
import ShareButton from '../components/RecipeDetails/ShareButton';
import FavoriteButton from '../components/RecipeDetails/FavoriteButton';
import StartRecipeButton from '../components/RecipeDetails/StartRecipeButton';

function FoodDetails(props) {
  const { id } = props.match.params;
  const [singleFood, setSingleFood] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFoodId(id).then((data) => {
      setSingleFood(data);
      setLoading(false);
    });
  }, []);

  // https://stackoverflow.com/questions/51976152/refused-to-display-https-www-youtube-com-watchv-okzrsbjqjos-in-a-frame-beca
  const youtubeURL = () => String(singleFood.strYoutube).replace('watch?v=', 'embed/');

  return loading && !singleFood ? (
    <section>Loading...</section>
  ) : (
    <div>
      <img src={singleFood.strMealThumb} alt="Meal" data-testid="recipe-photo" />
      <ShareButton url={props} />
      <FavoriteButton recipe={singleFood} />
      <h1 data-testid="recipe-title">{singleFood.strMeal}</h1>
      <h3 data-testid="recipe-category">{singleFood.strCategory}</h3>
      <IngredientList singleItem={singleFood} />
      <p data-testid="instructions">{singleFood.strInstructions}</p>
      {singleFood.strYoutube ? (
        <iframe width="420" height="315" src={youtubeURL()} data-testid="video" />
      ) : null}
      <DrinkCarousel />
      <StartRecipeButton url={props} />
    </div>
  );
}

export default FoodDetails;

FoodDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};
