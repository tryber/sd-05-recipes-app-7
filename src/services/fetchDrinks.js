// Fetch API de bebidas
export function fetchDrinks(text = '', type = '') {
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

export function fetchDetails(id) {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => response.json())
    .then((data) => data.drinks)
    .catch((error) => console.log(error));
}

