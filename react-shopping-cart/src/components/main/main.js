import React from "react";
import { useStyles } from "./mainStyle";
const Main = ({ title }) => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <main>{title}</main>
    </div>
  );
};
export default Main;
