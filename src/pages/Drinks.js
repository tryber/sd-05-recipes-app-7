import React, { useEffect, useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';

import Footer from '../components/Footer';
import DrinkCard from '../components/Cards/DrinkCard';
import Header from '../components/Header/Header';
import DrinkContext from '../context/DrinkContext';
import fetchDrinks from '../services/fetchDrinks';
import filterIngredientFood from '../services/fetchDrinks';

function Alert(array) {
  return array === null
    ? alert('Sinto muito, não encontramos nenhuma receita para esses filtros.')
    : null;
}

const Drinks = () => {
  const { drinks, requestDrinks, ingredient } = useContext(DrinkContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDrinks().then((data) => {
      requestDrinks(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    filterIngredientFood(ingredient).then((data) => {
      requestDrinks(data);
    });
  }, []);

  return loading ? (
    <section>Loading...</section>
  ) : (
    <section>
      <Header title={'Bebidas'} />
      {Alert(drinks)}
      {drinks && drinks.length === 1 ? <Redirect to={`/bebidas/${drinks[0].idDrink}`} /> : null}
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
