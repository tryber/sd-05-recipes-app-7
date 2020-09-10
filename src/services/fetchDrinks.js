// Fetch API de bebidas
function fetchDrinks(text = '', type = '') {
  let api = '';
  if (type === 'ingredient') {
    api = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${text}`;
  } else if (type === 'firstLetter') {
    api = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${text}`;
  } else {
    api = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`;
  }
  return fetch(api)
    .then((response) => response.json())
    .then((data) => data.drinks)
    .catch((error) => console.log(error));
}

export default fetchDrinks;
