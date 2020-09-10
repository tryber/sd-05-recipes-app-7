import React from 'react';

import Footer from '../components/Footer';
import PageTitle from '../components/Header/PageTitle';
import DrinkCard from '../components/Cards.js/DrinkCard';

function Drinks() {
  return (
    <div>
      <PageTitle title={'Bebidas'} />
      <DrinkCard />
      <Footer />
    </div>
  );
}

export default Drinks;
