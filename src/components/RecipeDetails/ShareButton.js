import React from 'react';
import PropTypes from 'prop-types';

import shareIcon from '../../images/shareIcon.svg';

const copy = require('clipboard-copy');

function copyToClipboard(text) {
  copy(text);
  return alert('Link copiado!');
}

function ShareButton(props) {
  const { pathname } = props.url.location;

  return (
    <input
      type="image"
      src={shareIcon}
      alt="Share Button"
      data-testid="share-btn"
      onClick={() => copyToClipboard(pathname)}
    />
  );
}

export default ShareButton;

ShareButton.propTypes = {
  url: PropTypes.shape({
    location: PropTypes.string.isRequired,
  }).isRequired,
};
