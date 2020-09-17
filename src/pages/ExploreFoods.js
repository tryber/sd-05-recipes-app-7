import React from 'react';
import { Link } from 'react-router-dom';
import SearchLessHeader from '../components/Header/SearchlessHeader';
import Footer from '../components/Footer';

const ExploreFoods = () => (
  <div>
    <SearchLessHeader title={'Explorar Comidas'} />
    <Link to="/explorar/comidas/ingredientes">
      <button data-testid="explore-by-ingredient">Por Ingredientes</button>
    </Link>
    <Link to="/explorar/comidas/area">
      <button data-testid="explore-by-area">Por Local de Origem</button>
    </Link>
    <Link to="/comidas/:id">
      <button data-testid="explore-surprise">Me Surpreenda!</button>
    </Link>
    <Footer />
  </div>
);

export default ExploreFoods;
