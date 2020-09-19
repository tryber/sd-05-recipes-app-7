import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';

const FavoritedFoodCard = (props) => {
  const { food, index, copyToClipboard } = props;
  return (
    <div>
      <Link to={`/comidas/${food.id}`}>
        <p data-testid={`${index}-horizontal-top-text`}>{`${food.area} - ${food.category}`}</p>
        <img
          data-testid={`${index}-horizontal-image`}
          src={food.image}
          alt="comida"
          style={{ width: 100 }}
        />
        <h4 data-testid={`${index}-horizontal-name`}>{food.name}</h4>
      </Link>
      <input
        type="image"
        id="share-button"
        src={shareIcon}
        alt="Share Button"
        data-testid={`${index}-horizontal-share-btn`}
        onClick={() => copyToClipboard('comidas', food.id)}
      />
    </div>
  );
};

export default FavoritedFoodCard;

FavoritedFoodCard.propTypes = {
  food: PropTypes.instanceOf(Object).isRequired,
  index: PropTypes.number.isRequired,
  copyToClipboard: PropTypes.func.isRequired,
};
