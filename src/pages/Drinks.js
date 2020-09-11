import React, { useEffect, useContext } from 'react';

import Footer from '../components/Footer';
import DrinkCard from '../components/Cards/DrinkCard';
import Header from '../components/Header/Header';
import DrinkContext from '../context/DrinkContext';
import { fetchDrinks } from '../services/fetchDrinks';

const Drinks = () => {
  const { loading, drinks, toggleLoading, requestDrinks } = useContext(DrinkContext);

  useEffect(() => {
    fetchDrinks().then((data) => {
      requestDrinks(data);
      toggleLoading();
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
