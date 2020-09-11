import React, { useState, useEffect } from 'react';
import { fetchDetails } from '../services/fetchDrinks';

const DrinkDetails = (props) => {
  const { id } = props.match.params;
  const [drink, setDrink] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDetails(id).then((data) => {
      setDrink(data);
      setLoading(false);
    });
  }, []);

  const filterIngredients = () =>
    Object.keys(drink[0])
      .filter(
        (key) =>
          key.includes('Ingredient') &&
          drink[0][key] !== '' &&
          drink[0][key] !== null,
      )
      .reduce((object, key) => {
        if (key.length === 14) {
          return {
            ...object,
            [drink[0][key]]: drink[0][`strMeasure${key[key.length - 1]}`],
          };
        }
        return {
          ...object,
          [drink[0][key]]:
            drink[0][`strMeasure${key[key.length - 2]}${key[key.length - 1]}`],
        };
      }, {});

  return loading ? (
    <section>Loading...</section>
  ) : (
    <div>
      <img src={drink[0].strDrinkThumb} data-testid="recipe-photo" alt="Drink"/>
      <h1 data-testid="recipe-title">{drink[0].strDrink}</h1>
      <p>{drink[0].strCategory}</p>
      <h3>Ingredientes</h3>
      <ul>
        {Object.entries(filterIngredients()).map((key, index) =>
          key[1] === null ? (
            <li>{`${key[0]}`}</li>
          ) : (
            <li
              data-testid={`${index}-ingredient-name-and-measure`}
            >{`${key[0]} - ${key[1]}`}</li>
          ),
)}
      </ul>
      <p data-testid="instructions">{drink[0].strInstructions}</p>
      {drink[0].strDrinkAlternate !== null ? (
        <div>
          <h3>Recomendações</h3>
          {drink[0].strDrinkAlternate}
        </div>
      ) : null}
      <button>Iniciar Receita</button>
    </div>
  );
};

export default DrinkDetails;
