import React, { useState } from 'react';

import SearchLessHeader from '../components/Header/SearchlessHeader';
import DoneDrinkCard from '../components/Cards/DoneDrinkCard';
import DoneFoodCard from '../components/Cards/DoneFoodCard';

function RecipesDone() {
  const [filter, setFilter] = useState('All');
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  const applyFilter = (type) => setFilter(type);

  return (
    <section>
      <SearchLessHeader title={'Receitas Feitas'} />
      <section>
        <button data-testid="filter-by-all-btn" onClick={() => applyFilter('All')}>
          All
        </button>
        <button data-testid="filter-by-food-btn" onClick={() => applyFilter('Food')}>
          Food
        </button>
        <button data-testid="filter-by-drink-btn" onClick={() => applyFilter('Drink')}>
          Drinks
        </button>
      </section>
      {doneRecipes.map((recipe, index) => {
        if (recipe.type === 'comida') {
          return (
            <div style={filter === 'Drink' ? { display: 'none' } : null}>
              <DoneFoodCard recipe={recipe} index={index} />;
            </div>
          );
        }
        return (
          <div style={filter === 'Food' ? { display: 'none' } : null}>
            <DoneDrinkCard recipe={recipe} index={index} />;
          </div>
        );
      })}
    </section>
  );
}

export default RecipesDone;
