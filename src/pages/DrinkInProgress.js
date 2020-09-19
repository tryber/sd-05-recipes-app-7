import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { fetchDrinkId } from '../services/fetchDrinks';
import IngredientChecklist from '../components/RecipeInProgress/IngredientChecklist';
import ShareButton from '../components/RecipeDetails/ShareButton';
import FavoriteDrink from '../components/RecipeDetails/FavoriteDrink';

const doneCocktail = (drink) => ({
  id: drink.idDrink,
  type: 'bebida',
  area: drink.strArea || '',
  category: drink.strCategory || '',
  alcoholicOrNot: drink.strAlcoholic || '',
  name: drink.strDrink,
  image: drink.strDrinkThumb,
  doneDate: Date(),
  tags: (drink.strTags) ? drink.strTags.split(',') : [],
});

function DrinkInProgress(props) {
  const { id } = props.match.params;
  const [singleDrink, setSingleDrink] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const completedRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];

  useEffect(() => {
    fetchDrinkId(id).then((data) => {
      setSingleDrink(data);
      setIsLoading(false);
    });
  }, []);

  const finishCocktail = () => {
    const finished = [...completedRecipes, doneCocktail(singleDrink)];
    localStorage.setItem('doneRecipes', JSON.stringify(finished));
  };

  return isLoading || !singleDrink ? (
    <section>Loading...</section>
  ) : (
    <section>
      {console.log(singleDrink)}
      <img src={singleDrink.strDrinkThumb} alt="Drink" data-testid="recipe-photo" />
      <h1 data-testid="recipe-title">{singleDrink.strDrink}</h1>
      <ShareButton />
      <FavoriteDrink recipe={singleDrink} />
      <h2 data-testid="recipe-category">{singleDrink.strCategory}</h2>
      <h3>Ingredients</h3>
      <IngredientChecklist singleItem={singleDrink} />
      <p data-testid="instructions">{singleDrink.strInstructions}</p>
      <Link to="/receitas-feitas">
        <button data-testid="finish-recipe-btn" onClick={() => finishCocktail()}>
          Finalizar Receita
        </button>
      </Link>
    </section>
  );
}

export default DrinkInProgress;

DrinkInProgress.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};
