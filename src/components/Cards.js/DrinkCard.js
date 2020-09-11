import React from 'react';
import { Link } from 'react-router-dom';

const DrinkCard = (props) => {
  return (
    <Link to={`/bebidas/${props.drink.idDrink}`}>
      <div key={props.drink.idDrink} data-testid={`${props.index}-recipe-card`}>
        <h3 data-testId={`${props.index}-card-name`}>{props.drink.strDrink}</h3>
        <img
          src={props.drink.strDrinkThumb}
          alt="Drink"
          data-testid={`${props.index}-card-img`}
        />
      </div>
    </Link>
  );
};

export default DrinkCard;
