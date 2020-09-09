import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import profileIcon from '../../images/profileIcon.svg'
import searchIcon from '../../images/searchIcon.svg'

//https://stackoverflow.com/questions/8683528/embed-image-in-a-button-element

function ComponenteHeader() {
  const [searchActive, setSearchActive] = useState(true);
  const [searchText, setSearchText] = useState('');

  function handleChange(event) {
    setSearchText(event.target.value)
  }

  return (
    <header>
      <Link to="/perfil">
        <input type="image" src={profileIcon} alt="profile" data-testid="profile-top-btn" />
      </Link>
      <h2 data-testid="page-title">COMIDAS</h2>
      <input type="image" src={searchIcon} alt="search" data-testid="search-top-btn" onClick={() => setSearchActive(!searchActive)} />
      <form hidden={searchActive}>
        <input type="text" placeholder="Buscar Receitas" onChange={handleChange} data-testid="search-input" value={searchText} />
        <input type="radio" name="pesquisar" id="ingredientes" data-testid="ingredient-search-radio" value="" />
        <label htmlFor="ingredientes">Ingredientes</label>
        <input type="radio" name="pesquisar" id="nome" data-testid="name-search-radio" value="" />
        <label htmlFor="nome">Nome</label>
        <input type="radio" name="pesquisar" id="letra" data-testid="first-letter-search-radio" value="" />
        <label htmlFor="letra">Primeira Letra</label>
        <button type="button" data-testid="exec-search-btn">Buscar</button>
      </form>
    </header>
  ) 
}

export default ComponenteHeader;
