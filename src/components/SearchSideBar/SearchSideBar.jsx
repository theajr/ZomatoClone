/* eslint-disable react/jsx-wrap-multilines */
import { Divider } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import Loader from '../Loader';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {},
}));

const SearchSideBar = ({
  categories = [],
  selectedCuisines = [],
  fetchCategories,
  toggleSearchItem,
  searchOptions,
  selectedCategories = [],
  cuisines = [],
  loading,
  search,
}) => {
  console.log('dsf', selectedCuisines);
  const classes = useStyles();

  useEffect(() => {
    if (!categories.length) fetchCategories();
    return () => {};
  }, []);

  useEffect(() => {
    search({
      ...searchOptions,
      category: selectedCategories.join(','),
    });
    return () => {};
  }, [selectedCategories]);

  const handleChange = event => {
    toggleSearchItem('categories', event.target.name);
  };

  const handleChangeCuisine = event => {
    toggleSearchItem('cuisines', event.target.name);
  };
  if (loading) return <Loader />;
  return (
    <div>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Categories</FormLabel>
        <FormGroup>
          {categories.map(c => {
            return (
              <FormControlLabel
                key={c.id}
                control={
                  <Checkbox
                    onChange={handleChange}
                    checked={selectedCategories.includes(`${c.id}`)}
                    name={`${c.id}`}
                  />
                }
                label={c.name}
              />
            );
          })}
        </FormGroup>
      </FormControl>
      <Divider style={{ margin: 10, borderTop: `2px solid teal` }} />
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Cuisines</FormLabel>
        <FormGroup>
          {cuisines.map(c => {
            return (
              <FormControlLabel
                key={c}
                control={
                  <Checkbox
                    onChange={handleChangeCuisine}
                    checked={selectedCuisines.includes(c)}
                    name={c}
                  />
                }
                label={c}
              />
            );
          })}
        </FormGroup>
      </FormControl>
    </div>
  );
};

SearchSideBar.propTypes = {};

export default SearchSideBar;
