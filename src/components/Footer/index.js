import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <Link to="/bebidas">
        <img src="../../src/images/drinkIcon.svg" alt="Drink Icon" />
      </Link>
      <Link to="/explorar">
        <img src="../../src/images/searchIcon.svg" alt="Search Icon" />
      </Link>
      <Link to="/comidas">
        <img src="../../src/images/mealIcon.svg" alt="Meal icon" />
      </Link>
    </div>
  );
}

export default Footer;
