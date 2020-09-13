import React from 'react';
import PropTypes from 'prop-types';

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
    <ul>
      {Object.entries(filterIngredients(props.singleItem)).map((key, index) => (
        key[1] === null ? (
          <li data-testid={`${index}-ingredient-name-and-measure`}>{key[0]}</li>
        ) : (
          <li data-testid={`${index}-ingredient-name-and-measure`}>{`${key[0]} - ${key[1]}`}</li>
        )),
      )}
    </ul>
  );
}

export default IngredientList;

IngredientList.propTypes = {
  singleItem: PropTypes.instanceOf(Object).isRequired,
};
