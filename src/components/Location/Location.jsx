/* eslint-disable camelcase */
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
    },
  },
  media: {
    height: 140,
  },
}));

const Location = ({ onClick, location }) => {
  const classes = useStyles();
  const { name, country_flag_url, country_name } = location;

  const onCickHandler = () => {
    onClick(location);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={onCickHandler}>
        <CardContent>
          <img src={country_flag_url} alt="Country Flag" loading="lazy" />
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography gutterBottom variant="h6" component="h6">
            {country_name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

Location.propTypes = {
  onClick: PropTypes.func.isRequired,
  location: PropTypes.shape({
    name: PropTypes.string,
    country_flag_url: PropTypes.string,
    country_name: PropTypes.string,
  }),
};

export default Location;
