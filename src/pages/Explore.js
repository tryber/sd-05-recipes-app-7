import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import SearchlessHeader from '../components/Header/SearchlessHeader';

function Explore() {
  return (
    <div>
      <SearchlessHeader title={'Explorar'} />
      <Link to="/explorar/comidas">
        <button data-testid="explore-food">Explorar Comidas</button>
      </Link>
      <Link to="/explorar/bebidas">
        <button data-testid="explore-drinks">Explorar Bebidas</button>
      </Link>
      <Footer />
    </div>
  );
}

export default Explore;
