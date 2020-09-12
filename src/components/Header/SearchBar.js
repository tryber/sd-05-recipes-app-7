import React, { useContext } from 'react';
import FoodContext from '../../context/FoodContext';
import fetchFoods from '../../services/fetchFoods';


function SearchBar() {
  const { updateSearchText, updateSelectedFilter, searchText, selectedFilter, requestFoods,
  } = useContext(FoodContext);

  const sendFilterFoodRequest = (text, filter) => {
    if (filter === 'firstLetter' && text.length > 1) {
      alert('Sua busca deve conter somente 1 (um) caracter');
    } else {
      fetchFoods(text, filter).then((data) => requestFoods(data));
    }
  };

  return (
    <form>
      <input
        type="text" placeholder="Buscar Receitas"
        onChange={(event) => updateSearchText(event)}
        data-testid="search-input" value={searchText}
      />
      <input
        type="radio" name="pesquisar" id="ingredientes"
        data-testid="ingredient-search-radio" value="ingredient"
        onChange={(event) => updateSelectedFilter(event)}
      />
      <label htmlFor="ingredientes">Ingredientes</label>
      <input
        type="radio" name="pesquisar" id="nome"
        data-testid="name-search-radio" value="name"
        onChange={(event) => updateSelectedFilter(event)}
      />
      <label htmlFor="nome">Nome</label>
      <input
        type="radio" name="pesquisar" id="letra"
        data-testid="first-letter-search-radio" value="firstLetter"
        onChange={(event) => updateSelectedFilter(event)}
      />
      <label htmlFor="letra">Primeira Letra</label>
      <button
        type="button" data-testid="exec-search-btn"
        onClick={() => sendFilterFoodRequest(searchText, selectedFilter)}
      >
        Buscar
      </button>
    </form>
  );
}

export default SearchBar;
