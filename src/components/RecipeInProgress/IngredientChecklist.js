import React from 'react';
import PropTypes from 'prop-types';

// import './style.css';

function IngredientList(props) {
  // https://medium.com/@vmarchesin/using-array-prototype-reduce-in-objects-using-javascript-dfcdae538fc8
  const filterIngredients = () =>
    Object.keys(props.singleItem)
      .filter(
        (key) =>
          key.includes('Ingredient') &&
          props.singleItem[key] !== '' &&
          props.singleItem[key] !== null,
      )
      .reduce((object, key) => {
        if (key.length === 14) {
          return {
            ...object,
            [props.singleItem[key]]: props.singleItem[`strMeasure${key[key.length - 1]}`],
          };
        }
        return {
          ...object,
          [props.singleItem[key]]:
            props.singleItem[`strMeasure${key[key.length - 2]}${key[key.length - 1]}`],
        };
      }, {});

  return (
    <form>
      {Object.entries(filterIngredients(props.singleItem)).map((key, index) =>
        key[1] === null ? (
          <div data-testid={`${index}-ingredient-step`}>
            <input type="checkbox" id="ingredient" name="ingredients" value={key[0]} />
            <label htmlFor="ingredient" className="line-through">
              {key[0]}
            </label>
          </div>
        ) : (
          <div data-testid={`${index}-ingredient-step`}>
            <input
              type="checkbox"
              id="ingredient"
              name="ingredients"
              value={`${key[0]} - ${key[1]}`}
            />
            <label htmlFor="ingredient" className="line-through">{`${key[0]} - ${key[1]}`}</label>
          </div>
        ),
      )}
    </form>
  );
}

export default IngredientList;

IngredientList.propTypes = {
  singleItem: PropTypes.instanceOf(Object).isRequired,
};
