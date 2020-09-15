import React from 'react';

import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

function FavoriteButton(props) {
  const { recipe } = props;
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  const isFavorite = favoriteRecipes.some((item) => (
    recipe.idDrink ? item.id === recipe.idDrink : item.id === recipe.idMeal
    ));

  // const toggleFavorite = () => {
  //   let updateFavoriteRecipes = [];
  //   if (isFavorite) {
  //     // algo
  //   } else {
  //     updateFavoriteRecipes = [
  //       ...favoriteRecipes, {
  //         id:
  //       }
  //     ]
  //   }
  // }

  return (
    <input
      type="image"
      src={isFavorite ? blackHeartIcon : whiteHeartIcon}
      alt="Favorite Button"
      data-testid="favorite-btn"
    />
  );
}

export default FavoriteButton;

// [{
//   id: id-da-receita,
//   type: comida-ou-bebida,
//   area: area-da-receita-ou-texto-vazio,
//   category: categoria-da-receita-ou-texto-vazio,
//   alcoholicOrNot: alcoholic-ou-non-alcoholic-ou-texto-vazio,
//   name: nome-da-receita,
//   image: imagem-da-receita
// }]

// function insertItem(array, action) {
//   return [
//     ...array.slice(0, action.index),
//     action.item,
//     ...array.slice(action.index)
//   ]
// }

// function removeItem(array, action) {
//   return [...array.slice(0, action.index), ...array.slice(action.index + 1)]
// }
