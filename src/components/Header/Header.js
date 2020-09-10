import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import SearchIcon from './SearchIcon';
import ProfileLink from './ProfileLink';
import PageTitle from './PageTitle';
import SearchBar from './SearchBar';
import HeaderContext from '../../context/HeaderContext';

const Header = (props) => {
  const { searchBarActive } = useContext(HeaderContext);
  return (
    <header>
      <ProfileLink />
      <PageTitle title={props.title} />
      <SearchIcon />
      {/* https://stackoverflow.com/questions/24502898/show-or-hide-element-in-react/39401319 */}
      {searchBarActive ? <SearchBar /> : null}
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
