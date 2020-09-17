import React, { useState, useEffect, useContext } from 'react';

import CategoryContext from '../../context/CategoryContext';
import { fetchByCategories } from '../../services/fetchDrinks';
import DrinkContext from '../../context/DrinkContext';

export default function ExploreDrinks() {
  const [catDrinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { selectCategory, category } = useContext(CategoryContext);
  const { requestDrinks } = useContext(DrinkContext);

  function fetchCategories() {
    return fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
    ).then((response) => response.json());
  }
  useEffect(() => {
    fetchCategories().then((data) => {
      setDrinks(data.drinks);
      setLoading(false);
    });
  }, []);
  return loading ? (
    <section>Loading...</section>
  ) : (
    <div>
      <button
        name="All"
        data-testid="All-category-filter"
        onClick={(event) => {
          selectCategory(event);
          fetchByCategories(event.target.name, category).then((data) => requestDrinks(data));
        }
      }
      > All
      </button>
      {catDrinks.map((item, index) => {
        if (index < 5) {
          return (
            <button
              data-testid={`${item.strCategory}-category-filter`}
              name={item.strCategory}
              onClick={(e) => {
                selectCategory(e);
                fetchByCategories(e.target.name, category).then((data) => requestDrinks(data));
              }}
            > {item.strCategory}
            </button>);
        } return null;
      })}
    </div>
  );
}
