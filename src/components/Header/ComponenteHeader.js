import React, { useState } from 'react';

import './Header.css';
import searchIcon from '../../images/searchIcon.svg';
import ProfileLink from './ProfileLink';
import SearchBar from './SearchBar';

function ComponenteHeader() {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <header className="header">
      <ProfileLink />
      {/* https://stackoverflow.com/questions/8683528/embed-image-in-a-button-element */}
      <input
        type="image"
        src={searchIcon}
        alt="search"
        data-testid="search-top-btn"
        onClick={() => setSearchActive(!searchActive)}
      />
      {/* https://stackoverflow.com/questions/24502898/show-or-hide-element-in-react/39401319 */}
      {searchActive ? <SearchBar /> : null}
    </header>
  );
}

export default ComponenteHeader;
