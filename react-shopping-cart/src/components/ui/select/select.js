import clsx from "clsx";
import React from "react";
import { useStyles } from "./selectStyle";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const SelectBox = ({ values }) => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = event => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          className={clsx(classes.selectEmpty, classes.dropdownStyle)}
          inputProps={{ "aria-label": "Without label" }}
          MenuProps={{ classes: { paper: classes.menuPaper } }}
        >
          <MenuItem value="">
            <em>Display All</em>
          </MenuItem>
          {values.map(validNote => (
            <MenuItem value={validNote}>{validNote}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
export default SelectBox;
