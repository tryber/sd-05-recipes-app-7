// Fetch API de comidas

export default function fetchFoods(text = '', type = '') {
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

export function fetchFoodId(id) {
  return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => response.json())
    .then((data) => data.meals[0])
    .catch((error) => console.error(error));
}

export function fetchIngredient() {
  return fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    .then((response) => response.json())
    .then((data) => data.meals)
    .catch((error) => console.error(error));
}

export function filterIngredientFood(name) {
  return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`)
    .then((response) => response.json())
    .then((data) => data.meals[0])
    .catch((error) => console.error(error));
}
