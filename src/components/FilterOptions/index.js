import { connect } from 'react-redux';
import FilterOptions from './FilterOptions';
import { fetchCategories } from '../../actions/categories';

const mapStateToProps = ({ restaurant }) => {
  const allCuisines = restaurant.restaurants.map(r => r.cuisines);
  const cuisines = Array.from(new Set(allCuisines.flat(2)));
  return { cuisines, categories: restaurant.recategories };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterOptions);
