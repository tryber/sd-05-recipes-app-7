import React from 'react';
import { Link } from 'react-router-dom';

import ShareDoneRecipe from '../RecipesDone/ShareDoneRecipe';

function DoneDrinkCard({ recipe, index }) {
  return (
    <Link to={`/bebidas/${recipe.id}`}>
      <section className="done-card">
        <img src={recipe.image} alt="recipe" data-testid={`${index}-horizontal-image`} />
        <h2 data-testid={`${index}-horizontal-top-text`}>{recipe.alcoholicOrNot}</h2>
        <h1 data-testid={`${index}-horizontal-name`}>{recipe.name}</h1>
        <p data-testid={`${index}-horizontal-done-date`}>{recipe.doneDate}</p>
        <ShareDoneRecipe index={index} url={`bebidas/${recipe.id}`} />
        <p data-testid={`${index}-${recipe.tags[0]}-horizontal-tag`}>{recipe.tags[0]}</p>
        <p data-testid={`${index}-${recipe.tags[1]}-horizontal-tag`}>{recipe.tags[1]}</p>
      </section>
    </Link>
  );
}

export default DoneDrinkCard;
