import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchDrinkId } from '../services/fetchDrinks';
import FoodCarousel from '../components/FoodDetails/FoodCarousel';

const DrinkDetails = (props) => {
  const { id } = props.match.params;
  const [singleDrink, setSingleDrink] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDrinkId(id).then((data) => {
      setSingleDrink(data);
      setLoading(false);
    });
  }, []);

  const youtubeURL = () => String(singleDrink.strVideo).replace('watch?v=', 'embed/');

  const filterIngredients = () =>
    Object.keys(singleDrink)
      .filter(
        (key) => key.includes('Ingredient') && singleDrink[key] !== '' && singleDrink[key] !== null,
      )
      .reduce((object, key) => {
        if (key.length === 14) {
          return {
            ...object,
            [singleDrink[key]]: singleDrink[`strMeasure${key[key.length - 1]}`],
          };
        }
        return {
          ...object,
          [singleDrink[key]]: singleDrink[`strMeasure${key[key.length - 2]}${key[key.length - 1]}`],
        };
      }, {});

  return loading && !singleDrink ? (
    <section>Loading...</section>
  ) : (
    <div>
      <img src={singleDrink.strDrinkThumb} data-testid="recipe-photo" alt="Drink" />
      <button data-testid="share-btn">Share</button>
      <button data-testid="favorite-btn">Favorite</button>
      <h1 data-testid="recipe-title">{singleDrink.strDrink}</h1>
      <h3 data-testid="recipe-category">
        {singleDrink.strCategory}
        {singleDrink.strAlcoholic}
      </h3>
      <ul>
        {Object.entries(filterIngredients()).map((key, index) =>
          key[1] === null ? (
            <li data-testid={`${index}-ingredient-name-and-measure`}>{key[0]}</li>
          ) : (
            <li data-testid={`${index}-ingredient-name-and-measure`}>{`${key[0]} - ${key[1]}`}</li>
          ),
        )}
      </ul>
      <p data-testid="instructions">{singleDrink.strInstructions}</p>
      {singleDrink.strVideo ? (
        <iframe width="420" height="315" src={youtubeURL()} data-testid="video" />
      ) : null}
      <FoodCarousel />
      <button data-testid="start-recipe-btn">START</button>
    </div>
  );
};

export default DrinkDetails;

DrinkDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};
