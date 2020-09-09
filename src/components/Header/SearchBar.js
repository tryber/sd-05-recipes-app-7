import React, { useState } from 'react';

function SearchBar() {
  const [searchText, setSearchText] = useState('');

  function handleChange(event) {
    setSearchText(event.target.value);
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Buscar Receitas"
        onChange={(event) => handleChange(event)}
        data-testid="search-input"
        value={searchText}
      />
      <input
        type="radio"
        name="pesquisar"
        id="ingredientes"
        data-testid="ingredient-search-radio"
        value=""
      />
      <label htmlFor="ingredientes">Ingredientes</label>
      <input type="radio" name="pesquisar" id="nome" data-testid="name-search-radio" value="" />
      <label htmlFor="nome">Nome</label>
      <input
        type="radio"
        name="pesquisar"
        id="letra"
        data-testid="first-letter-search-radio"
        value=""
      />
      <label htmlFor="letra">Primeira Letra</label>
      <button type="button" data-testid="exec-search-btn">
        Buscar
      </button>
    </form>
  );
}

export default SearchBar;
