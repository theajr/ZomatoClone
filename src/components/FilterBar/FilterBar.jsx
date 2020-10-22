import { Divider } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Slider from '@material-ui/core/Slider';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import SortByRating from '../SortByRating';

const marks = new Array(5)
  .fill(1)
  .map((k, i) => ({ value: i + 1, label: i + 1, key: 'item' + i }));

const FilterBar = ({ selectedRatingRange, updateRatingRange }) => {
  const [range, setRange] = useState(selectedRatingRange);

  const applyFilter = useRef(
    _.debounce(q => {
      updateRatingRange(q);
    }, 500)
  ).current;

  const handleChange = (e, newValue) => {
    setRange(newValue);
    applyFilter(newValue);
  };

  return (
    <div style={{ paddingTop: 10 }}>
      <SortByRating />

      <FormControl component="fieldset" style={{ width: '90%', padding: 10 }}>
        <FormLabel component="legend"> Filter by rating</FormLabel>

        <FormGroup>
          <Slider
            value={range}
            onChange={handleChange}
            valueLabelDisplay="auto"
            min={0}
            marks={marks}
            step={1}
            max={5}
          />
        </FormGroup>
      </FormControl>
    </div>
  );
};

FilterBar.propTypes = {
  selectedRatingRange: PropTypes.arrayOf(PropTypes.number),
  updateRatingRange: PropTypes.func,
};

export default FilterBar;
