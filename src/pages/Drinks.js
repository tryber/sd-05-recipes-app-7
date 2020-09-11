import React, { useState, useEffect } from 'react';
import { fetchDrinks } from '../services/fetchDrinks';

import Footer from '../components/Footer';
import PageTitle from '../components/Header/PageTitle';
import DrinkCard from '../components/Cards.js/DrinkCard';

const Drinks = () => {
  const [loading, setLoading] = useState(true);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetchDrinks().then((data) => {
      setDrinks(data);
      setLoading(false);
    });
  }, []);

  return (
    (loading) ? <section>Loading...</section>
   : 
    <div>
      <PageTitle title={'Bebidas'} />
      {drinks.map((drink, index) => {
        if (index < 12) {
          return <DrinkCard drink={drink} index={index} />
        } else return null
      })}
      <Footer />
    </div>
  );
}

export default Drinks;
