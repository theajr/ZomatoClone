import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Chip from '@material-ui/core/Chip';
import { Divider } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    margin: 10,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    flexGrow: 1,
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const getImageURL = restaurant =>
  restaurant.featured_image ||
  restaurant.thumb_url ||
  (restaurant.photos && restaurant.photos.length
    ? restaurant.photos[0].thumb_url
    : 'https://b.zmtcdn.com/webFrontend/64dffaa58ffa55a377cdf42b6a690e721585809275.png?fit=around|402:360&crop=402:360;*,*');

const Restaurant = ({ restaurant }) => {
  const classes = useStyles();
  const cuisines = restaurant.cuisines.map(c => (
    <Chip label={c} key={c} style={{ marginRight: 2 }} />
  ));

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={getImageURL(restaurant)}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {restaurant.name}
          </Typography>
          <Rating
            name="disabled"
            value={parseInt(restaurant.user_rating.aggregate_rating, 10)}
            precision={0.1}
            disabled
          />
          <Typography variant="subtitle1" color="textSecondary">
            {restaurant.location.locality}
            <Divider style={{ margin: 10 }} />
            {cuisines}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

Restaurant.propTypes = {};

export default Restaurant;
