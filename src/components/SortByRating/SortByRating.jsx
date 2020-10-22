import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import { Divider } from '@material-ui/core';

const options = [
  {
    value: 'ASC',
    label: 'Low to High',
  },
  {
    value: 'DESC',
    label: 'High to Low ',
  },
];

const SortByRating = ({ updateRatingOrder, selectedRatingOrder }) => {
  console.log('===', selectedRatingOrder);
  const onClick = order => () => {
    updateRatingOrder(order);
  };
  return (
    <FormControl component="fieldset" style={{ padding: 10 }}>
      <FormLabel component="legend">Sort by rating:</FormLabel>
      <FormGroup>
        <ButtonGroup variant="outlined" color="primary">
          {options.map(o => (
            <Button
              key={o.value}
              onClick={onClick(o.value)}
              disabled={selectedRatingOrder === o.value}
              variant={
                selectedRatingOrder === o.value ? 'contained' : 'outlined'
              }
            >
              {o.label}
            </Button>
          ))}
        </ButtonGroup>
      </FormGroup>
    </FormControl>
  );
};

export default SortByRating;
