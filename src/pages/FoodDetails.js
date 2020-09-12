import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchFoodId } from '../services/fetchFoods';

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

  // https://medium.com/@vmarchesin/using-array-prototype-reduce-in-objects-using-javascript-dfcdae538fc8
  const filterIngredients = () =>
    Object.keys(singleFood)
      .filter(
        (key) => key.includes('Ingredient') && singleFood[key] !== '' && singleFood[key] !== null,
      )
      .reduce((object, key) => {
        if (key.length === 14) {
          return {
            ...object,
            [singleFood[key]]: singleFood[`strMeasure${key[key.length - 1]}`],
          };
        }
        return {
          ...object,
          [singleFood[key]]: singleFood[`strMeasure${key[key.length - 2]}${key[key.length - 1]}`],
        };
      }, {});

  return loading && !singleFood ? (
    <section>Loading...</section>
  ) : (
    <div>
      <img src={singleFood.strMealThumb} alt="Meal" data-testid="recipe-photo" />
      <button data-testid="share-btn">Share</button>
      <button data-testid="favorite-btn">Favorite</button>
      <h1 data-testid="recipe-title">{singleFood.strMeal}</h1>
      <h3 data-testid="recipe-category">{singleFood.strCategory}</h3>
      <ul>
        {Object.entries(filterIngredients()).map((key, index) =>
          (key[1] === null ? <li data-testid={`${index}-ingredient-name-and-measure`}>{key[0]}</li> : <li>{`${key[0]} - ${key[1]}`}</li>),
        )}
      </ul>
      <p data-testid="instructions">{singleFood.strInstructions}</p>
      {singleFood.strYoutube ? <iframe width="420" height="315" src={youtubeURL()} /> : null}
    </div>
  );
}

export default FoodDetails;

FoodDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};
