// Food card para ser mapeado na Food Page
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function FoodCard({ food, index }) {
  return (
    <Link to={`/comidas/${food.idMeal}`}>
      <div key={food.idMeal} data-testid={`${index}-recipe-card`}>
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
}