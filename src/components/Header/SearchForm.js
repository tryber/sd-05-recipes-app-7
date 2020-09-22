import React, { useContext } from 'react';

import FoodContext from '../../context/FoodContext';

function SearchForm() {
  const { updateSearchText, updateSelectedFilter, searchText } = useContext(FoodContext);

  return (
    <form className="header-search-form">
      <input
        type="text"
        placeholder="Buscar Receitas"
        onChange={(event) => updateSearchText(event)}
        data-testid="search-input"
        value={searchText}
      />
      <label htmlFor="ingredientes">Ingredientes</label>
      <input
        type="radio"
        name="pesquisar"
        id="ingredientes"
        data-testid="ingredient-search-radio"
        value="ingredient"
        onChange={(event) => updateSelectedFilter(event)}
      />
      <label htmlFor="nome">Nome</label>
      <input
        type="radio"
        name="pesquisar"
        id="nome"
        data-testid="name-search-radio"
        value="name"
        onChange={(event) => updateSelectedFilter(event)}
      />
      <label htmlFor="letra">Primeira Letra</label>
      <input
        type="radio"
        name="pesquisar"
        id="letra"
        data-testid="first-letter-search-radio"
        value="firstLetter"
        onChange={(event) => updateSelectedFilter(event)}
      />
    </form>
  );
}

export default SearchForm;
