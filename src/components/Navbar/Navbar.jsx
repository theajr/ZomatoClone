import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import LocationPicker from '../LocationPicker';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = ({ onClickMenu, appbarClass, menuIconProps }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={appbarClass}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            {...menuIconProps}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            MoZoTo
          </Typography>
          <LocationPicker />
        </Toolbar>
      </AppBar>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
