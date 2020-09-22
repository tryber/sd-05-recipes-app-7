import React from 'react';
import PropTypes from 'prop-types';

function PageTitle(props) {
  return <h2 data-testid="page-title" className="header-title">{props.title}</h2>;
}

export default PageTitle;

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
