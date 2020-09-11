import React, { useState, useEffect } from 'react';

import fetchFoods from '../services/fetchFoods';
import Footer from '../components/Footer';
import FoodCard from '../components/Cards/FoodCard';
import Header from '../components/Header/Header';

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
      {console.log('console teste', foods)}
      <Header title={'Comidas'} />
      {foods && foods.map((food, index) => {
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
