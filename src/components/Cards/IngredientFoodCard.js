import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FoodContext from '../../context/FoodContext';

function IngredientFoodCard(item) {
  const { setIngredient } = useContext(FoodContext);
  return (
    <Link
      to="/comidas"
      onClick={(() => {
        setIngredient(item.ingredient.strIngredient);
      })}
    >
      <div
        data-testid={`${item.index}-ingredient-card`}
        value={item.ingredient.strIngredient}
      >
        <img
          data-testid={`${item.index}-card-img`}
          src={`https://www.themealdb.com/images/ingredients/${item.ingredient.strIngredient}-Small.png`}
          alt="Ingredient"
        />
        <p data-testid={`${item.index}-card-name`}>
          {item.ingredient.strIngredient}
        </p>
      </div>
    </Link>
  );
}

export default IngredientFoodCard;
