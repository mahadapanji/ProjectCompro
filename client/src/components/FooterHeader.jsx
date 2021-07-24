import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { positions } from "@material-ui/system";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#0000006e",
    position: "sticky",
    top: 0,
    width: "100%",
    height: "50px",
    color: "white",
  },
  section: {
    margin: "auto",
  },
  item: {
    cursor: "pointer",
    "&:hover": {
      color: "purple",
    },
  },
}));

export default function FooterHeader() {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="row" className={classes.footer}>
      <Box className={classes.section}>
        <Box className={classes.item}>People Power</Box>
      </Box>
      <Box className={classes.section} display="flex">
        <Box className={classes.item} mx={5}>
          About
        </Box>
        <Box className={classes.item} mx={5}>
          Process
        </Box>
        <Box className={classes.item} mx={5}>
          Services
        </Box>
        <Box className={classes.item} mx={5}>
          Contact
        </Box>
      </Box>
    </Box>
  );
}
