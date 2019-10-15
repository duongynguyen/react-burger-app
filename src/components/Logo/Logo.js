import React from "react";
import buggerLogo from "../../assets/images/133 burger-logo.png";
import classes from "./Logo.css";

const logo = props => (
  <div className={classes.Logo}>
    <img src={buggerLogo} alt="MyBurger"/>
  </div>
);

export default logo;
