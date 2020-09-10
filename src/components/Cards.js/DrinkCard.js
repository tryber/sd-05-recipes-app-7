import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DrinkCard = ({ drink, index }) => {
  return (
    <Link to={`/bebidas/${drink.idDrink}`}>
      <div key={drink.idDrink} data-testid={`${index}-recipe-card`}>
        <h3 data-testId={`${index}-card-name`}>{drink.strDrink}</h3>
        <img src={drink.strDrinkThumb} alt="Drink" data-testid={`${index}-card-img`} />
      </div>
    </Link>
  );
};

export default DrinkCard;

DrinkCard.propTypes = {
  drink: PropTypes.instanceOf(Object).isRequired,
  index: PropTypes.number.isRequired,
};
