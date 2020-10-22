import PropTypes from 'prop-types';
import React from 'react';

const FilterOptions = ({ ratings = [] }) => {
  return <div>FilterOptions</div>;
};

FilterOptions.propTypes = {
  ratings: PropTypes.arrayOf(PropTypes.number),
};

export default FilterOptions;
