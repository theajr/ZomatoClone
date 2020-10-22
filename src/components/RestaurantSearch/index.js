import { connect } from 'react-redux';
import RestaurantSearch from './RestaurantSearch';
import { searchRestaurants } from '../../actions/restarant';
import { setRestaurantName } from '../../actions/sortSearchFilterOptions';

const mapStateToProps = ({
  location,
  restaurant,
  sortSearchFilterOptions,
}) => ({
  loading: restaurant.loading,
  error: restaurant.error,
  restaurants: restaurant.data,
  searchOptions: {
    ...sortSearchFilterOptions.search,
    cityId: location.selectedLocation.id,
  },
  restaurantName: sortSearchFilterOptions.search.restaurantName,
});
const mapDispatchToProps = dispatch => ({
  search: q => {
    dispatch(searchRestaurants(q));
  },
  setRestaurantName: q => dispatch(setRestaurantName(q)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantSearch);
