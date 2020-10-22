import { connect } from 'react-redux';
import { updateFilterSortOrder } from '../../actions/sortSearchFilterOptions';
import SortByRating from './SortByRating';

const mapStateToProps = ({ sortSearchFilterOptions }) => ({
  selectedRatingOrder: sortSearchFilterOptions.sort.rating,
});

const mapDispatchToProps = dispatch => ({
  updateRatingOrder: order => dispatch(updateFilterSortOrder(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SortByRating);
