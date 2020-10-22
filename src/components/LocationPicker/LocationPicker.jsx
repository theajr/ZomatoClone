/* eslint-disable camelcase */
import { Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import Loader from '../Loader';
import Location from '../Location/Location';

const LocationPicker = ({
  fetchLocations,
  selectedLocation = {},
  setLocation,
  loading,
  location_suggestions,
}) => {
  const [open, setOpen] = useState(!selectedLocation.id);
  const [query, setQuery] = useState('');
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const selectedCity = selectedLocation.name || 'Choose Your Location';

  const setSelectedLocation = selected => {
    setLocation(selected);
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const delayedQuery = useRef(
    _.debounce(q => {
      fetchLocations(q);
    }, 500)
  ).current;

  const searchHandler = e => {
    console.log('VVV', e.target.value);
    setQuery(e.target.value);

    delayedQuery(e.target.value);
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        style={{ color: 'white' }}
        data-testid="locationBtn"
      >
        {selectedCity}
      </Button>
      <Dialog
        maxWidth="md"
        fullWidth
        fullScreen={fullScreen}
        open={open}
        disableEscapeKeyDown
        disableBackdropClick
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">Pick a location</DialogTitle>
        <DialogContent>
          <TextField
            id="outlined-basic"
            label="Enter you city name"
            variant="outlined"
            value={query}
            fullWidth
            onChange={searchHandler}
          />

          <Divider style={{ margin: 10 }} />
          {loading ? (
            <Loader />
          ) : (
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              {location_suggestions.map(location => {
                return (
                  <Grid item md={4} key={location.id}>
                    <Location
                      location={location}
                      onClick={setSelectedLocation}
                    />
                  </Grid>
                );
              })}
            </Grid>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

LocationPicker.propTypes = {
  fetchLocations: PropTypes.func.isRequired,
  selectedLocation: PropTypes.shape({
    id: PropTypes.number,
  }),
  setLocation: PropTypes.func.isRequired,
  location_suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ),
  loading: PropTypes.bool,
};

export default LocationPicker;
