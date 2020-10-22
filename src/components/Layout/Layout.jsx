import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';
import React from 'react';
import FilterBar from '../FilterBar';
import Navbar from '../Navbar';
import SearchSideBar from '../SearchSideBar';

const isMobile = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

const useStyles = drawerWidth => {
  console.log('DDDDDD', drawerWidth);
  return makeStyles(theme => {
    return {
      root: {
        display: 'flex',
        flexDirection: 'column',
      },
      appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      hide: {
        display: 'none',
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: 0,
      },
      sideRoot: {
        paddingLeft: theme.spacing(2),
      },
      contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: drawerWidth,
      },
    };
  });
};

export default function Layout({ isLocationPicked, children }) {
  const deviceWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;
  const isMobileDevice = isMobile();
  let drawerWidth = 300;
  if (!isLocationPicked) {
    drawerWidth = 0;
  } else if (isMobileDevice) {
    drawerWidth = deviceWidth;
  }
  const classes = useStyles(drawerWidth)();
  const theme = useTheme();
  const [open, setOpen] = React.useState(!isMobileDevice);

  const handleDrawerOpen = () => {
    if (isMobileDevice) setOpen(true);
  };

  const handleDrawerClose = () => {
    if (isMobileDevice) setOpen(false);
  };
  console.log(
    classes,
    clsx(classes.content, {
      [classes.contentShift]: open,
    })
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar
        menuIconProps={{
          onClick: handleDrawerOpen,
          className: clsx(classes.menuButton, open && classes.hide),
        }}
        appbarClass={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      />

      {isLocationPicked && (
        <>
          <Drawer
            pers
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              {isMobileDevice && (
                <Button
                  onClick={handleDrawerClose}
                  variant="contained"
                  color="secondary"
                >
                  Apply
                </Button>
              )}
            </div>
            <Divider />
            <div className={classes.sideRoot}>
              <FilterBar />
              <SearchSideBar />
            </div>
          </Drawer>
          <main
            className={clsx(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            {children}
          </main>
        </>
      )}
    </div>
  );
}
