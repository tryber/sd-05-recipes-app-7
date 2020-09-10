import React, { useState, useEffect } from 'react';
import fetchDrinks from '../../services/fetchDrinks';

const Drinks = () => {
  const [loading, setLoading] = useState(true);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetchDrinks().then((data) => {
      setDrinks(data);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <section>Loading...</section>
  ) : (
    <section>
      {drinks.map((drink, index) => {
        if (index < 12) {
          return (
            <div key={drink.idDrink} data-testid={`${index}-recipe-card`}>
              <h3 data-testId={`${index}-card-name`}>{drink.strDrink}</h3>
              <img
                src={drink.strDrinkThumb}
                alt="Drink"
                data-testid={`${index}-card-img`}
              />
              {console.log(drink)}
            </div>
          );
        }
        return null;
      })}
    </section>
  );
};

export default Drinks;
