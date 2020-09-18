import React from 'react';

import SearchLessHeader from '../components/Header/SearchlessHeader';
import DoneDrinkCard from '../components/Cards/DoneDrinkCard';
import DoneFoodCard from '../components/Cards/DoneFoodCard';

function RecipesDone() {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));

  return (
    <section>
      <SearchLessHeader title={'Receitas Feitas'} />
      <section>
        <button data-testid="filter-by-all-btn">All</button>
        <button data-testid="filter-by-food-btn">Food</button>
        <button data-testid="filter-by-drink-btn">Drinks</button>
      </section>
      {doneRecipes.map((recipe, index) => {
        if (recipe.type === 'comida') {
          return <DoneFoodCard recipe={recipe} index={index} />;
        }
        return <DoneDrinkCard recipe={recipe} index={index} />;
      })}
    </section>
  );
}

export default RecipesDone;
