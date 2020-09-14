import React, { useState, useEffect, useContext } from 'react';

import CategoryContext from '../../context/CategoryContext';

export default function ExploreFoods() {
  const [catFoods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const { selectCategory } = useContext(CategoryContext);

  function fetchCategories() {
    return fetch(
      'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
    ).then((response) => response.json());
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
    <div>
      <button
        data-testid="All-category-filter"
        name="All"
        onClick={(e) => selectCategory(e)}
      >
        All
      </button>
      {catFoods.map((item, index) => {
        if (index < 5) {
          return (
            <button
              data-testid={`${item.strCategory}-category-filter`}
              name={item.strCategory}
              onClick={(e) => selectCategory(e)}
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
