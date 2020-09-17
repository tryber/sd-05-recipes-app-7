import React, { useEffect, useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';

import Footer from '../components/Footer';
import FoodCard from '../components/Cards/FoodCard';
import Header from '../components/Header/Header';
import FoodContext from '../context/FoodContext';
import fetchFoods from '../services/fetchFoods';

function Alert(array) {
  return array === null
    ? alert('Sinto muito, não encontramos nenhuma receita para esses filtros.')
    : null;
}

const Foods = () => {
  const { foods, requestFoods, ingredient, setIngredient } = useContext(FoodContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (ingredient === '') {
      fetchFoods().then((data) => {
        requestFoods(data);
        setLoading(false);
      });
    } else {
      fetchFoods(ingredient, 'ingredient').then((data) => {
        requestFoods(data);
        setLoading(false);
        setIngredient('');
      });
    }
  }, []);

  return loading ? (
    <section>Loading...</section>
  ) : (
    <section>
      <Header title={'Comidas'} />
      {Alert(foods)}
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
