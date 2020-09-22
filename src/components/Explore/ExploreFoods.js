import React, { useState, useEffect, useContext } from 'react';

import CategoryContext from '../../context/CategoryContext';
import FoodContext from '../../context/FoodContext';
import { fetchByCategories } from '../../services/fetchFoods';

export default function ExploreFoods() {
  const [catFoods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const { selectCategory, category } = useContext(CategoryContext);
  const { requestFoods } = useContext(FoodContext);
  function fetchCategories() {
    return fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list').then((response) =>
      response.json(),
    );
  }
  useEffect(() => {
    fetchCategories().then((data) => {
      setFoods(data.meals);
      setLoading(false);
    });
  }, []);
  return loading ? (
    <section>Loading...</section>
  ) : (
    <div className="filter-container">
      <button
        className="btn-white"
        data-testid="All-category-filter"
        name="All"
        onClick={(e) => {
          selectCategory(e);
          fetchByCategories(e.target.name, category).then((data) => requestFoods(data));
        }}
      >
        {' '}
        All
      </button>
      {catFoods.map((item, index) => {
        if (index < 5) {
          return (
            <button
              className="btn-white"
              data-testid={`${item.strCategory}-category-filter`}
              name={item.strCategory}
              onClick={(event) => {
                selectCategory(event);
                fetchByCategories(event.target.name, category).then((data) => requestFoods(data));
              }}
            >
              {item.strCategory}
            </button>
          );
        }
        return null;
      })}
    </div>
  );
}
