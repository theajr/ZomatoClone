import { connect } from 'react-redux';
import { updateFilterRatingRange } from '../../actions/sortSearchFilterOptions';
import FilterBar from './FilterBar';

const mapStateToProps = ({ sortSearchFilterOptions }) => {
  return { selectedRatingRange: sortSearchFilterOptions.filter.ratingRange };
};

const mapDispatchToProps = dispatch => ({
  updateRatingRange: range => dispatch(updateFilterRatingRange(range)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
