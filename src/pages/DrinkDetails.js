import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchDetails } from '../services/fetchDrinks';

const DrinkDetails = (props) => {
  const { id } = props.match.params;
  const [drink, setDrink] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDetails(id).then((data) => {
      setDrink(data[0]);
      setLoading(false);
    });
  }, []);

  const filterIngredients = () =>
    Object.keys(drink)
      .filter((key) => key.includes('Ingredient') && drink[key] !== '' && drink[key] !== null)
      .reduce((object, key) => {
        if (key.length === 14) {
          return {
            ...object,
            [drink[key]]: drink[`strMeasure${key[key.length - 1]}`],
          };
        }
        return {
          ...object,
          [drink[key]]:
            drink[`strMeasure${key[key.length - 2]}${key[key.length - 1]}`],
        };
      }, {});

  return loading ? (
    <section>Loading...</section>
  ) : (
    <div>
      <img src={drink.strDrinkThumb} data-testid="recipe-photo" alt="Drink" />
      <h1 data-testid="recipe-title">{drink.strDrink}</h1>
      <p>{drink.strCategory}</p>
      <h3>Ingredientes</h3>
      <ul>
        {Object.entries(filterIngredients()).map((key, index) =>
          (key[1] === null ? <li
            data-testid={`${index}-ingredient-name-and-measure`}
          >{key[0]}</li> : <li>{`${key[0]} - ${key[1]}`}</li>),
          )}
      </ul>
      <p data-testid="instructions">{drink.strInstructions}</p>
      <div> <h3>Recomendações</h3>
        {drink.strDrinkAlternate}
      </div><button>Iniciar Receita</button></div>
  );
};

export default DrinkDetails;

DrinkDetails.propTypes = {
  match: PropTypes.arrayOf(Object).isRequired,
};
