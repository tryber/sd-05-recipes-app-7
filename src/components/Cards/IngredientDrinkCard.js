import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DrinkContext from '../../context/DrinkContext';

function IngredientDrinkCard(item) {
  const { setIngredient } = useContext(DrinkContext);

  return (
    <Link
      to="/bebidas"
      name={item.ingredient.strIngredient1}
      onClick={(() => {
        setIngredient(item.ingredient.strIngredient1);
      })}
    >
      <div
        data-testid={`${item.index}-ingredient-card`}
        value={item.ingredient.strIngredient1}
      >
        <img
          data-testid={`${item.index}-card-img`}
          src={`https://www.themealdb.com/images/ingredients/${item.ingredient.strIngredient1}-Small.png`}
          alt="Ingredient"
        />
        <p data-testid={`${item.index}-card-name`}>
          {item.ingredient.strIngredient1}
        </p>
      </div>
    </Link>
  );
}

export default IngredientDrinkCard;
