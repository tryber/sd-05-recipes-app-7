import React, { useState, useEffect } from 'react';

import SearchLessHeader from '../components/Header/SearchlessHeader';
import DoneDrinkCard from '../components/Cards/DoneDrinkCard';
import DoneFoodCard from '../components/Cards/DoneFoodCard';

function RecipesDone() {
  const [filter, setFilter] = useState('All');
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
  const [filteredRecipes, setFilteredRecipes] = useState(doneRecipes);

  useEffect(() => {
    if (filter === 'Food') {
      return setFilteredRecipes(doneRecipes.filter((items) => items.type === 'comida'));
    } else if (filter === 'Drink') {
      return setFilteredRecipes(doneRecipes.filter((items) => items.type === 'bebida'));
    } else {
      return setFilteredRecipes(doneRecipes);
    }
  }, [filter]);

  return (
    <section>
      <SearchLessHeader title={'Receitas Feitas'} />
      <section>
        <button data-testid="filter-by-all-btn" onClick={() => setFilter('All')}>
          All
        </button>
        <button data-testid="filter-by-food-btn" onClick={() => setFilter('Food')}>
          Food
        </button>
        <button data-testid="filter-by-drink-btn" onClick={() => setFilter('Drink')}>
          Drinks
        </button>
      </section>
      {filteredRecipes.map((recipe, index) => {
        if (recipe.type === 'comida') {
          return (
            <div>
              <DoneFoodCard recipe={recipe} index={index} />
            </div>
          );
        }
        return (
          <div>
            <DoneDrinkCard recipe={recipe} index={index} />
          </div>
        );
      })}
    </section>
  );
}

export default RecipesDone;
