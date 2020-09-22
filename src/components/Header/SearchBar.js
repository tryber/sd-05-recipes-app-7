import React, { useContext } from 'react';

import fetchFoods from '../../services/fetchFoods';
import fetchDrinks from '../../services/fetchDrinks';
import FoodContext from '../../context/FoodContext';
import DrinkContext from '../../context/DrinkContext';
import SearchForm from './SearchForm';

const filterRecipes = (text, filter, fetch, request) => {
  if (filter === 'firstLetter' && text.length > 1) {
    alert('Sua busca deve conter somente 1 (um) caracter');
  } else {
    fetch(text, filter).then((data) => request(data));
  }
};

function SearchBar() {
  const { requestFoods, searchText, selectedFilter } = useContext(FoodContext);

  const { requestDrinks } = useContext(DrinkContext);

  return (
    <section className="header-search-container">
      <SearchForm />
      <button
        className="btn btn-search"
        type="button"
        data-testid="exec-search-btn"
        onClick={() => {
          filterRecipes(searchText, selectedFilter, fetchFoods, requestFoods);
          filterRecipes(searchText, selectedFilter, fetchDrinks, requestDrinks);
        }}
      >
        Buscar
      </button>
    </section>
  );
}

export default SearchBar;
