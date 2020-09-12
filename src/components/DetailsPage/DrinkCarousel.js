import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import fetchDrinks from '../../services/fetchDrinks';
import DrinkContext from '../../context/DrinkContext';

function DrinkCarousel() {
  const { drinks, requestDrinks } = useContext(DrinkContext);

  useEffect(() => {
    fetchDrinks().then((data) => {
      requestDrinks(data);
    });
  }, []);

  return (
    <section className="carousel">
      {drinks &&
        drinks.map((drink, index) => {
          if (index < 6) {
            return (
              <Link to={`/bebidas/${drink.idDrink}`}>
                <div
                  key={drink.idDrink}
                  data-testid={`${index}-recomendation-card`}
                  className="carousel-item"
                >
                  <h3 data-testid={`${index}-recomendation-title`}>{drink.strDrink}</h3>
                  <img src={drink.strDrinkThumb} alt="Drink" data-testid={`${index}-card-img`} />
                </div>
              </Link>
            );
          }
          return null;
        })}
    </section>
  );
}

export default DrinkCarousel;
