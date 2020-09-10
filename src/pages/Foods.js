import React, { useState, useEffect } from 'react';

import fetchFoods from '../services/fetchFoods';
import Footer from '../components/Footer';
import PageTitle from '../components/Header/PageTitle';
import FoodCard from '../components/Cards/FoodCard';

const Foods = () => {
  const [loading, setLoading] = useState(true);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetchFoods().then((data) => {
      setFoods(data);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <section>Loading...</section>
  ) : (
    <section>
      <Header title={'Comidas'} />
      {foods.map((food, index) => {
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
