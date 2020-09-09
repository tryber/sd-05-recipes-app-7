// Fetch API de comidas
function fetchFoods() {
  return fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then((response) => response.json())
    .then((data) => data.meals)
    .catch((error) => console.error(error));
}

export default fetchFoods;
