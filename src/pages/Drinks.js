import React, { useState, useEffect } from 'react';
import { fetchDrinks } from '../services/fetchDrinks';
import DrinkCard from '../components/Cards/DrinkCard';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';

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
      <Header title={'Bebidas'} />
      {drinks && drinks.map((drink, index) => {
        if (index < 12) {
          return <DrinkCard drink={drink} index={index} />;
        }
        return null;
      })}
      <Footer />
    </section>
  );
};

export default Drinks;
