import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function StartRecipeButton(props) {
  const { pathname } = props.url.location;

  return (
    <Link to={`${pathname}/in-progress`}>
      <button data-testid="start-recipe-btn" className="btn-recipe">
        Iniciar Receita
      </button>
    </Link>
  );
}

export default StartRecipeButton;

StartRecipeButton.propTypes = {
  url: PropTypes.shape({
    location: PropTypes.string.isRequired,
  }).isRequired,
};
