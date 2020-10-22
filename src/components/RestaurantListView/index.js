import { connect } from 'react-redux';
import _ from 'lodash';
import RestaurantListView from './RestaurantListView';

const filterRestaurants = (res, selectedCuisines, ratingRange) => {
  const rating = parseInt(res.user_rating.aggregate_rating, 10);
  return res.cuisines.some(
    c =>
      (selectedCuisines.length === 0 || selectedCuisines.includes(c)) &&
      rating >= ratingRange[0] &&
      rating <= ratingRange[1]
  );
};
// _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
const mapStateToProps = ({ restaurant, sortSearchFilterOptions }) => {
  const filtered = restaurant.restaurants.filter(res =>
    filterRestaurants(
      res,
      sortSearchFilterOptions.search.cuisines,
      sortSearchFilterOptions.filter.ratingRange
    )
  );
  const sorted = _.orderBy(
    filtered,
    ['user_rating.aggregate_rating'],
    [sortSearchFilterOptions.sort.rating.toLowerCase()]
  );

  return {
    ...restaurant,
    restaurants: sorted,
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantListView);
