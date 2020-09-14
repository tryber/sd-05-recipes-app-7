import React, { useEffect } from 'react';

import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

function FavoriteButton() {
  // const { recipe } = props;
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));

  useEffect(() => favoriteRecipes, []);

  return (
    <input
      type="image"
      src={favoriteRecipes ? blackHeartIcon : whiteHeartIcon}
      alt="Favorite Button"
      data-testid="favorite-btn"
    />
  );
}

export default FavoriteButton;
