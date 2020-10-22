/* eslint-disable react/prop-types */
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import _ from 'lodash';
import React, { useRef, useState } from 'react';

const useStyles = makeStyles(theme => ({
  search: {
    flexGrow: 1,
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border: `2px solid #3f51b5`,

    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));
const RestaurantSearch = ({
  style = {},
  restaurantName,
  setRestaurantName,
  cityId,
  searchOptions,
  search,
}) => {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const delayedQuery = useRef(
    _.debounce(q => {
      console.log('dfdfdf', searchOptions);
      setRestaurantName(q);
      search({ ...searchOptions, restaurantName: q }); // TODO
    }, 500)
  ).current;

  const searchHandler = e => {
    setQuery(e.target.value);

    delayedQuery(e.target.value);
  };

  return (
    <div className={classes.search} style={style}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        onChange={searchHandler}
        defaultValue={restaurantName}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
};

RestaurantSearch.propTypes = {};

export default RestaurantSearch;
