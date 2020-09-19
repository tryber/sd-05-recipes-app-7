import React, { useState, useEffect, useContext } from 'react';
import SearchLessHeader from '../components/Header/SearchlessHeader';
import Footer from '../components/Footer';
import { fetchIngredient } from '../services/fetchDrinks';
import IngredientDrinkCard from '../components/Cards/IngredientDrinkCard';
import DrinkContext from '../context/DrinkContext';

const ExploreDrinksByIngredient = () => {
  const { drinks } = useContext(DrinkContext);
  const [ingredient, setIngredient] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchIngredient().then((data) => {
      setIngredient(data);
      setLoading(false);
    });
  }, [drinks]);

  return loading ? (
    <section>Loading...</section>
  ) : (
    <div>
      <SearchLessHeader title={'Explorar Ingredientes'} />
      {ingredient.slice(0, 12).map((item, index) => (
        <IngredientDrinkCard ingredient={item} index={index} />
      ))}
      <Footer />
    </div>
  );
};

export default ExploreDrinksByIngredient;
