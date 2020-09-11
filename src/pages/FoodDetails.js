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

  return (
    <div>
      <img src={food.strMealThumb} alt="Meal" data-testid="recipe-photo" />
      <button data-testid="share-btn">Share</button>
      <button data-testid="favorite-btn">Favorite</button>
      <h1 data-testid="recipe-title">{food.strMeal}</h1>
      <h3 data-testid="recipe-category">{food.strCategory}</h3>
      <h2>Ingredients</h2>
      <ul>
        <li>{`${food.strIngredient1} - ${food.strMeasure1}`}</li>
        <li>{`${food.strIngredient2} - ${food.strMeasure2}`}</li>
        <li>{`${food.strIngredient3} - ${food.strMeasure3}`}</li>
      </ul>
      <h2>Instructions</h2>
      <p>{food.strInstructions}</p>
      <h2>Video</h2>
      <iframe width="420" height="315" src={food.strYoutube} />
    </div>
  );
}

export default FoodDetails;
