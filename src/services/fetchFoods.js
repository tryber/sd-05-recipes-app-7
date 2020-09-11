// Fetch API de comidas
// function fetchFoods() {
//   return fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
//     .then((response) => response.json())
//     .then((data) => data.meals)
//     .catch((error) => console.error(error));
// }

// export default fetchFoods;

function fetchFoods(text = '', type = '') {
  let api = '';
  if (type === 'ingredient') {
    api = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${text}`;
  } else if (type === 'firstLetter') {
    api = `https://www.themealdb.com/api/json/v1/1/search.php?f=${text}`;
  } else {
    api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`;
  }
  return fetch(api)
    .then((response) => response.json())
    .then((data) => data.meals)
    .catch((error) => console.error(error));
}

export default fetchFoods;
