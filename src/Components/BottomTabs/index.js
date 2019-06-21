import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles } from '@material-ui/core/styles';
import history from '../../Utils/history'

const useStyles = makeStyles({
    root: {
      width: '100vw',
      position: 'absolute',
      bottom: 0,
      backgroundColor: '#483F53'
    }
  });

  function currentPathName (value) {
    switch (value) {
      case 0:
        return '/'
      case 1:
        return '/create-trip'
      case 2:
        return '/trip-list'
      default:
        break;
    }
  }

const BottomTabBar = () => {
   const classes = useStyles();
   const [value, setValue] = React.useState(0);
   return (<BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          history.push(currentPathName(newValue))
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Home" />
        <BottomNavigationAction label="Create List" />
        <BottomNavigationAction label="List" />
    </BottomNavigation>)
}

export default BottomTabBar
