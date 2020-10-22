import { connect } from 'react-redux';
import Layout from './Layout';

const mapStateToProps = state => ({
  isLocationPicked: state.location.selectedLocation.id,
});

export default connect(mapStateToProps)(Layout);
