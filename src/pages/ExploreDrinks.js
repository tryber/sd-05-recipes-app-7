import React from 'react';
import { Link } from 'react-router-dom';
import SearchLessHeader from '../components/Header/SearchlessHeader';
import Footer from '../components/Footer';

const ExploreDrinks = () => (
  <div>
    <SearchLessHeader title={'Explorar Bebidas'} />
    <Link to="/explorar/bebidas/ingredientes">
      <button data-testid="explore-by-ingredient">Por Ingredientes</button>
    </Link>
    <Link to="/bebidas/:id">
      <button data-testid="explore-surprise">Me Surpreenda!</button>
    </Link>
    <Footer />
  </div>
);

export default ExploreDrinks;
