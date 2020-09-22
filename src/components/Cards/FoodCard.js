import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Cards.css';

function FoodCard({ food, index }) {
  return (
    <Link to={`/comidas/${food.idMeal}`}>
      <div key={food.idMeal} data-testid={`${index}-recipe-card`} className="recipe-card">
        <h3 data-testid={`${index}-card-name`}>{food.strMeal}</h3>
        <img src={food.strMealThumb} alt="Meal" data-testid={`${index}-card-img`} />
      </div>
    </Link>
  );
}

export default FoodCard;

FoodCard.propTypes = {
  food: PropTypes.instanceOf(Object).isRequired,
  index: PropTypes.number.isRequired,
};
