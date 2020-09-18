import React from 'react';

import shareIcon from '../../images/shareIcon.svg';

const copy = require('clipboard-copy');

function copyToClipboard(text) {
  copy(text);
  document.getElementById('done-share-button').innerHTML = 'Link copiado!';
}

function ShareDoneRecipe({ index, url }) {
  const pathname = `http://localhost:3000/${url}`;

  return (
    <input
      type="image"
      id="done-share-button"
      src={shareIcon}
      alt="Share Button"
      data-testid={`${index}-horizontal-share-btn`}
      onClick={() => copyToClipboard(pathname)}
    />
  );
}

export default ShareDoneRecipe;
