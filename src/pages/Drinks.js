import React, { useEffect, useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';

import Footer from '../components/Footer';
import DrinkCard from '../components/Cards/DrinkCard';
import Header from '../components/Header/Header';
import DrinkContext from '../context/DrinkContext';
import fetchDrinks from '../services/fetchDrinks';
import ExploreDrinks from '../components/Explore/ExploreDrinks';
import CategoryContext from '../context/CategoryContext';

function Alert(array) {
  return array.length === 0
    ? alert('Sinto muito, não encontramos nenhuma receita para esses filtros.')
    : null;
}

const Drinks = () => {
  const { drinks, requestDrinks } = useContext(DrinkContext);
  const [loading, setLoading] = useState(true);
  const { category } = useContext(CategoryContext);

  useEffect(() => {
    fetchDrinks(category).then((data) => {
      requestDrinks(data);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <section>Loading...</section>
  ) : (
    <section>
      <Header title={'Bebidas'} />
      <ExploreDrinks />
      {drinks && drinks.length === 1 ? (
        <Redirect to={`/bebidas/${drinks[0].idDrink}`} />
      ) : null}
      {drinks &&
        drinks.map((drink, index) => {
          if (index < 12) {
            return <DrinkCard drink={drink} index={index} />;
          }
          return null;
        })}
      {Alert(drinks)}
      <Footer />
    </section>
  );
};

export default Drinks;
