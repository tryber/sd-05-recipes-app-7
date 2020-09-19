import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';

const FavoritedDrinkCard = (props) => {
  const { drink, index, copyToClipboard } = props;
  return (
    <div>
      <Link to={`/bebidas/${drink.id}`}>
        <p data-testid={`${index}-horizontal-top-text`}>{drink.alcoholicOrNot}</p>
        <img
          data-testid={`${index}-horizontal-image`}
          src={drink.image}
          alt="comida"
          style={{ width: 100 }}
        />
        <h4 data-testid={`${index}-horizontal-name`}>{drink.name}</h4>
      </Link>
      <input
        type="image"
        id="share-button"
        src={shareIcon}
        alt="Share Button"
        data-testid={`${index}-horizontal-share-btn`}
        onClick={() => copyToClipboard('bebidas', drink.id)}
      />
    </div>
  );
};

export default FavoritedDrinkCard;

FavoritedDrinkCard.propTypes = {
  drink: PropTypes.instanceOf(Object).isRequired,
  index: PropTypes.number.isRequired,
  copyToClipboard: PropTypes.func.isRequired,
};
