import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import Restaurant from '../Restaurant/Restaurant';
import Loader from '../Loader';

const RestaurantListView = ({ loading, restaurants, error }) => {
  if (loading) return <Loader />;
  if (!restaurants.length)
    return (
      <Typography
        component="h5"
        variant="h5"
        style={{ paddingTop: 50, textAlign: 'center' }}
      >
        No Results matching your search/filter criteria
      </Typography>
    );
  const list = restaurants.map(restaurant => (
    <Restaurant restaurant={restaurant} key={restaurant.id} />
  ));
  return <div>{list}</div>;
};

RestaurantListView.propTypes = {};

export default RestaurantListView;
