import React from "react";
import FooterHeader from "../components/FooterHeader";
import RadioButton from "../components/RadioButton";
import { makeStyles } from "@material-ui/core/styles";
import Background from "../assets/img/bg1.png";

const useStyles = makeStyles((theme) => ({
  section: {
    marginTop: 0,
    height: "100vh",
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <RadioButton />
      <FooterHeader />
    </div>
  );
}
