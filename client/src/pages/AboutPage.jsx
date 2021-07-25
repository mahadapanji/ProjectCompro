import React from "react";
import About from "../components/About";
import "./AboutPageCss.css"
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FotoProfile from "../assets/img/ProfilePict1.png";
import Grid from '@material-ui/core/Grid';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black"
  },
  row:{
    backgroundColor:"#1e1f1e",
    fontFamily:"'Rajdhani', sans-serif",
    paddingTop:10,
    paddingBottom:10,
    paddingLeft: 200,
    paddingRight: 200,

    [theme.breakpoints.down('md')]: {
      backgroundColor: "#1e1f1e",
      paddingLeft: 0,
      paddingRight: 0,
    },
  },

  GroupImage:{
    "& img":{
      paddingRight:10,
      paddingLeft:10
    },
    [theme.breakpoints.down('md')]: {
      "& img":{
        paddingRight:10,
        paddingLeft:10,
        width:100
      }
    },
  },
  TabPanel:{
    height:525,
    "& h1":{
      color: "#707070",
      fontSize:20,
      letterSpacing:1,
      textDecorationLine:"overline",
      fontWeight:100,
      fontFamily:"'Rajdhani', sans-serif"
    },
    "& h2":{
      color: "white",
      fontSize:25,
      letterSpacing:3,
      fontFamily:"'Rajdhani', sans-serif",
      fontWeight:"lighter"
    },
    "& p":{
      color: "white",
      fontSize:12,
      letterSpacing:3,
      fontFamily:"'Rajdhani', sans-serif"
    },
    [theme.breakpoints.down('md')]: {
      height:475,
      "& h1":{
        color: "#707070",
        fontSize:13,
        letterSpacing:1,
        textDecorationLine:"overline",
        fontWeight:100,
        fontFamily:"'Rajdhani', sans-serif"
      },    "& h2":{
        color: "white",
        fontSize:20,
        letterSpacing:3,
        fontFamily:"'Rajdhani', sans-serif",
        fontWeight:"lighter"
      },
      "& p":{
        color: "white",
        fontSize:12,
        letterSpacing:3,
        fontFamily:"'Rajdhani', sans-serif"
      },
    },
  }

}));



export default function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };


  return (
    <div className="app">
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300&display=swap" rel="stylesheet"/>



    <div className={classes.row}>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <div className={classes.TabPanel}>
            <TabPanel value={value} index={0} dir={theme.direction}>
              <h1>ABOUT</h1>
                  <h2>
                  WE ARE THE DIEHL GROUP ARCHITECTS, A FULL-SERVICE DESIGN AND CONSULTING 
                  FIRM SPECIALIZING IN FORENSIC ARCHITECTURE, QUALITY ASSURANCE, AND EXPERT WITNESS TESTIMONY. </h2>
                  <h2>WE ENSURE SOUND DESIGN AND LEGAL COMPLIANCE THROUGHOUT A BUILDING'S LIFESPAN, 
                  FROM CRADLE TO GRAVE.</h2>
                  <h2 style={{color:"red"}}>WE KNOW BUILDINGS</h2>
            </TabPanel>
         </div>
         <div className={classes.TabPanel}>
            <TabPanel value={value} index={1} dir={theme.direction}>
                <h1>THE TEAM</h1>

                <div className={classes.GroupImage}>
                    <img src={FotoProfile}></img>
                    <img src={FotoProfile}></img>
                    <img src={FotoProfile}></img>
                </div>



                <p style={{textAlign:"justify"}}>
                With over 30 years experience, our staff offers 
                a unique blend of expertise as designers and consultants. 
                We’ve been told this combination of talents uniquely supports our 
                clients’ needs, but we believe our hands on experience and knowledge 
                of building systems are the foundation for the specialized services we offer. </p>
            </TabPanel>
         </div>
         <div className={classes.TabPanel}>
            <TabPanel value={value} index={2} dir={theme.direction}>
                <p>Item Three</p>
            </TabPanel>
         </div>
      </SwipeableViews>

      <AppBar position="static" color="default" style={{backgroundColor:"#1e1f1e"}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="WHAT WE DO" {...a11yProps(0)} style={{color: "white"}}/>
          <Tab label="WHO WE ARE" {...a11yProps(1)} style={{color: "white"}}/>
          <Tab label="WHERE WE WORK" {...a11yProps(2)} style={{color: "white"}}/>
        </Tabs>
      </AppBar>

    </div>


    <About />
    </div>
  );
}