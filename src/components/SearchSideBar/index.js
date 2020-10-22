import { connect } from 'react-redux';
import SearchSideBar from './SearchSideBar';
import { fetchCategories } from '../../actions/categories';
import { toggleSearchOption } from '../../actions/sortSearchFilterOptions';
import { searchRestaurants } from '../../actions/restarant';

const mapStateToProps = ({
  restaurant,
  categories,
  location,
  sortSearchFilterOptions,
}) => {
  const allCuisines = restaurant.restaurants.map(r => r.cuisines);
  const cuisines = Array.from(new Set(allCuisines.flat(2)));

  return {
    cuisines,
    categories: categories.categories,
    loading: categories.loading,
    searchOptions: {
      ...sortSearchFilterOptions.search,
      cityId: location.selectedLocation.id,
    },
    selectedCategories: sortSearchFilterOptions.search.categories,
    selectedCuisines: sortSearchFilterOptions.search.cuisines,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    toggleSearchItem: (key, value) => dispatch(toggleSearchOption(key, value)),
    search: (q, cityId) => {
      dispatch(searchRestaurants(q, cityId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchSideBar);
