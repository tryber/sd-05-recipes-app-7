import React, { useEffect } from 'react';

function FoodInProgress(props) {
  const { id } = props.match.params;
  const inProgressFood = JSON.parse(localStorage.getItem('inProgressRecipes')).meals[id];
  console.log(inProgressFood);

  return (
    <section>
      <h3>Ingredients</h3>
      {inProgressFood.map((ingredient) => (
        <form>
          <input type="checkbox" id="ingredient" name="ingredients" value={ingredient} />
          <label htmlFor="ingredient">{ingredient}</label>
        </form>
      ))}
    </section>
  );
}

export default FoodInProgress;
