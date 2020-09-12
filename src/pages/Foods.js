import React, { useEffect, useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';

import Footer from '../components/Footer';
import FoodCard from '../components/Cards/FoodCard';
import Header from '../components/Header/Header';
import FoodContext from '../context/FoodContext';
import fetchFoods from '../services/fetchFoods';

const Foods = () => {
  const { foods, requestFoods } = useContext(FoodContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFoods().then((data) => {
      requestFoods(data);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <section>Loading...</section>
  ) : (
    <section>
      <Header title={'Comidas'} />
      {foods === null
        ? alert('Sinto muito, não encontramos nenhuma receita para esses filtros.')
        : null}
      {foods && foods.length === 1 ? <Redirect to={`/comidas/${foods[0].idMeal}`} /> : null}
      {foods &&
        foods.map((food, index) => {
          if (index < 12) {
            return <FoodCard food={food} index={index} />;
          }
          return null;
        })}
      <Footer />
    </section>
  );
};

export default Foods;
