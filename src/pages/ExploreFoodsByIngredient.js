import React, { useState, useEffect, useContext } from 'react';
import SearchLessHeader from '../components/Header/SearchlessHeader';
import Footer from '../components/Footer';
import { fetchIngredient } from '../services/fetchFoods';
import IngredientFoodCard from '../components/Cards/IngredientFoodCard';
import FoodContext from '../context/FoodContext';

const ExploreFoodsByIngredient = () => {
  const { foods } = useContext(FoodContext);
  const [ingredient, setIngredient] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchIngredient()
    .then((data) => {
      setIngredient(data);
      setLoading(false);
    });
  }, [foods]);

  return loading ? (
    <section>Loading...</section>
  ) : (
    <div>
      <SearchLessHeader title={'Explorar Ingredientes'} />
      {ingredient.slice(0, 12)
        .map((item, index) => <IngredientFoodCard ingredient={item} index={index} />)}
      <Footer />
    </div>
  );
};

export default ExploreFoodsByIngredient;
