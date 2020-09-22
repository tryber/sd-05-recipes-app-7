import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Cards.css';

const DrinkCard = ({ drink, index }) => (
  <Link to={`/bebidas/${drink.idDrink}`}>
    <div key={drink.idDrink} data-testid={`${index}-recipe-card`} className="recipe-card">
      <h3 data-testid={`${index}-card-name`}>{drink.strDrink}</h3>
      <img src={drink.strDrinkThumb} alt="Drink" data-testid={`${index}-card-img`} />
    </div>
  </Link>
);

export default DrinkCard;

DrinkCard.propTypes = {
  drink: PropTypes.instanceOf(Object).isRequired,
  index: PropTypes.number.isRequired,
};
