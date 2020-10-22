import { connect } from 'react-redux';
import { fetchLocations, setSelectedLocation } from '../../actions/location';
import LocationPicker from './LocationPicker';

const mapStateToProps = ({ location }) => ({
  location_suggestions: location.location_suggestions,
  selectedLocation: location.selectedLocation,
  loading: location.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchLocations: q => dispatch(fetchLocations(q)),
  setLocation: selectedLocation =>
    dispatch(setSelectedLocation(selectedLocation)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationPicker);
