import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from './PageTitle';
import ProfileLink from './ProfileLink';
import './Header.css';

const SearchlessHeader = (props) => (
  <header>
    <ProfileLink />
    <PageTitle title={props.title} />
  </header>
);

SearchlessHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SearchlessHeader;
