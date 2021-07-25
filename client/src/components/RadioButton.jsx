import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";

const PurpleRadio = withStyles({
  root: {
    color: purple[300],
    "&$checked": {
      color: purple[100],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export default function RadioButton() {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <PurpleRadio
        checked={selectedValue === "a"}
        onChange={handleChange}
        value="a"
        name="radio-button-demo"
        inputProps={{ "aria-label": "A" }}
        size="small"
      />
      <PurpleRadio
        checked={selectedValue === "b"}
        onChange={handleChange}
        value="b"
        name="radio-button-demo"
        inputProps={{ "aria-label": "B" }}
        size="small"
      />
      <PurpleRadio
        checked={selectedValue === "c"}
        onChange={handleChange}
        value="c"
        name="radio-button-demo"
        inputProps={{ "aria-label": "C" }}
        size="small"
      />
      <PurpleRadio
        checked={selectedValue === "d"}
        onChange={handleChange}
        value="d"
        color="default"
        name="radio-button-demo"
        inputProps={{ "aria-label": "D" }}
        size="small"
      />
      <PurpleRadio
        checked={selectedValue === "e"}
        onChange={handleChange}
        value="e"
        color="default"
        name="radio-button-demo"
        inputProps={{ "aria-label": "E" }}
        size="small"
      />
    </div>
  );
}
