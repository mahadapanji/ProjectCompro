import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import WorkIcon from '@material-ui/icons/Work';
import GroupIcon from '@material-ui/icons/Group';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    width: 500,
    marginLeft: "auto",
    marginRight: "auto"
    
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="WHAT DO WE DO" icon={<WorkIcon />} />
      <BottomNavigationAction label="WHO WE ARE" icon={<GroupIcon />} />
      <BottomNavigationAction label="WHERE WE WORK" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}