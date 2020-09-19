import React, { useEffect, useState } from 'react';
import fetchFoods, { fetchFoodByLocales, fetchLocales } from '../../services/fetchFoods';
import FoodCard from '../Cards/FoodCard';

const ExploreByLocales = () => {
  const [foods, setFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [filters, setFilters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    fetchLocales().then((data) => setFilters(data));
    fetchFoods().then((data) => { setFoods(data); setLoading(false); });
  }, []);

  useEffect(() => {
    fetchFoodByLocales(activeFilter).then((data) => setFilteredFoods(data));
  }, [activeFilter]);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <select
        data-testid="explore-by-area-dropdown"
        onChange={(event) => setActiveFilter(event.target.value)}
      >
        <option data-testid="All-option" value="All">All</option>
        {filters.map((filter) => (
          <option data-testid={`${filter.strArea}-option`} value={filter.strArea}>
            {filter.strArea}
          </option>
        ))}
      </select>
      {foods && activeFilter === 'All' &&
        foods.map((food, index) => {
          if (index < 12) {
            return <FoodCard food={food} index={index} />;
          }
          return null;
        })}
      {filteredFoods && activeFilter !== 'All' &&
        filteredFoods.map((food, index) => {
          if (index < 12) {
            return <FoodCard food={food} index={index} />;
          }
          return null;
        })}
    </div>
  );
};

export default ExploreByLocales;
