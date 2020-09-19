import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import ExploreByLocales from '../components/Explore/ExploreByLocales';

const ExploreFoodsByLocales = () => (
  <div>
    <Header title={'Explorar Origem'} />
    <ExploreByLocales />
    <Footer />
  </div>
);

export default ExploreFoodsByLocales;
