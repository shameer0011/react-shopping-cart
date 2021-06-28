import React from "react";
import { useStyles } from "./AppStyle";
import "./AppStyle.js";
import Dashbord from "./pages/dashbord";
// feature1
const App = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <Dashbord />
    </div>
  );
};

export default App;
