import React, { useEffect, useContext } from 'react';

import Footer from '../components/Footer';
import FoodCard from '../components/Cards/FoodCard';
import Header from '../components/Header/Header';
import FoodContext from '../context/FoodContext';
import fetchFoods from '../services/fetchFoods';

const Foods = () => {
  const { loading, foods, toggleLoading, requestFoods } = useContext(FoodContext);

  useEffect(() => {
    fetchFoods().then((data) => {
      requestFoods(data);
      toggleLoading();
    });
  }, []);

  return loading ? (
    <section>Loading...</section>
  ) : (
    <section>
      <Header title={'Comidas'} />
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
