import React, { useEffect, useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';

import Footer from '../components/Footer';
import FoodCard from '../components/Cards/FoodCard';
import Header from '../components/Header/Header';
import FoodContext from '../context/FoodContext';
import fetchFoods from '../services/fetchFoods';
import ExploreFoods from '../components/Explore/ExploreFoods';
import CategoryContext from '../context/CategoryContext';
import { filterByCategory } from '../services/ExtraFunctions';

function Alert(array) {
  return array.length === 0
    ? alert('Sinto muito, não encontramos nenhuma receita para esses filtros.')
    : null;
}

const Foods = () => {
  const { foods, requestFoods } = useContext(FoodContext);
  const [loading, setLoading] = useState(true);
  const { category } = useContext(CategoryContext);

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
      <ExploreFoods />
      {foods && foods.length === 1 ? (
        <Redirect to={`/comidas/${foods[0].idMeal}`} />
      ) : null}
      {foods &&
        filterByCategory(foods, category).map((food, index) => {
          if (index < 12) {
            return <FoodCard food={food} index={index} />;
          }
          return null;
        })}
      {Alert(filterByCategory(foods, category))}
      {console.log(filterByCategory(foods))}
      <Footer />
    </section>
  );
};

export default Foods;
