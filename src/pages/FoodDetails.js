import React, { useEffect, useState } from 'react';

// IMPORTANTE: Somente uma organização básica da página,
// sem as funções necessárias para mapear os valores
function FoodDetails() {
  const [food, setFood] = useState({});

  // Escrever novo "fetch" com id apropriada, abaixo somente o exemplo da API
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
      .then((response) => response.json())
      .then((data) => setFood(data.meals[0]));
  }, []);

  // https://stackoverflow.com/questions/51976152/refused-to-display-https-www-youtube-com-watchv-okzrsbjqjos-in-a-frame-beca
  const youtubeURL = () => String(food.strYoutube).replace('watch?v=', 'embed/');

  // https://medium.com/@vmarchesin/using-array-prototype-reduce-in-objects-using-javascript-dfcdae538fc8
  const filterIngredients = () =>
    Object.keys(food)
      .filter((key) => key.includes('Ingredient') && food[key] !== '' && food[key] !== null)
      .reduce((object, key) => {
        if (key.length === 14) {
          return {
            ...object,
            [food[key]]: food[`strMeasure${key[key.length - 1]}`],
          };
        }
        return {
          ...object,
          [food[key]]: food[`strMeasure${key[key.length - 2]}${key[key.length - 1]}`],
        };
      }, {});

  return (
    <div>
      <img src={food.strMealThumb} alt="Meal" data-testid="recipe-photo" />
      <button data-testid="share-btn">Share</button>
      <button data-testid="favorite-btn">Favorite</button>
      <h1 data-testid="recipe-title">{food.strMeal}</h1>
      <h3 data-testid="recipe-category">{food.strCategory}</h3>
      <h2>Ingredients</h2>
      <ul>
        {Object.entries(filterIngredients()).map((key) => (
          key[1] === null ? <li>{key[0]}</li> :
          <li>{`${key[0]} - ${key[1]}`}</li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <p>{food.strInstructions}</p>
      <h2>Video</h2>
      <iframe width="420" height="315" src={youtubeURL()} />
    </div>
  );
}

export default FoodDetails;
