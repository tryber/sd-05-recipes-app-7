import React, { useContext } from 'react';
import searchImage from '../../images/searchIcon.svg';
import HeaderContext from '../../context/HeaderContext';

const SearchIcon = () => {
  const { toggleSearchBar } = useContext(HeaderContext);

  return (
    // https://stackoverflow.com/questions/8683528/embed-image-in-a-button-element
    <input
      type="image"
      src={searchImage}
      alt="search"
      data-testid="search-top-btn"
      onClick={toggleSearchBar}
    />
  );
};

export default SearchIcon;
