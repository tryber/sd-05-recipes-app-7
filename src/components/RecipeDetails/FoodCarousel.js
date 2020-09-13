import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import fetchFoods from '../../services/fetchFoods';
import FoodContext from '../../context/FoodContext';

function FoodCarousel() {
  const { foods, requestFoods } = useContext(FoodContext);

  useEffect(() => {
    fetchFoods().then((data) => {
      requestFoods(data);
    });
  }, []);

  return (
    <section className="carousel">
      {foods &&
        foods.map((food, index) => {
          if (index < 6) {
            return (
              <Link to={`/comidas/${food.idMeal}`}>
                <div
                  key={food.idMeal}
                  data-testid={`${index}-recomendation-card`}
                  className="carousel-item"
                >
                  <h3 data-testid={`${index}-recomendation-title`}>{food.strMeal}</h3>
                  <img src={food.strMealThumb} alt="Meal" data-testid={`${index}-card-img`} />
                </div>
              </Link>
            );
          }
          return null;
        })}
    </section>
  );
}

export default FoodCarousel;
