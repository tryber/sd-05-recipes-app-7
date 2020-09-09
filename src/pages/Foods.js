import React, { useState, useEffect } from 'react';

import ComponentHeader from '../components/Header/ComponenteHeader';
import fetchFoods from '../services/fetchFoods';
import Footer from '../components/Footer';
import PageTitle from '../components/Header/PageTitle';

const Foods = () => {
  const [loading, setLoading] = useState(true);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetchFoods().then((data) => setFoods(data));
    setLoading(false);
  }, []);

  return loading ? (
    <section>Loading...</section>
  ) : (
    <section>
      <ComponentHeader />
      <PageTitle title={'Comidas'} />
      {foods.map((food, index) => {
        if (index < 12) {
          return (
            <div key={food.idMeal} data-testid={`${index}-recipe-card`}>
              <h3 data-testid={`${index}-card-name`}>{food.strMeal}</h3>
              <img src={food.strMealThumb} alt="Meal" data-testid={`${index}-card-img`} />
            </div>
          );
        }
        return null;
      })}
      <Footer />
    </section>
  );
};

export default Foods;
