import React from "react";
import Search from "../components/Search.js";
import Dropdown from "../components/Dropdown.js";
import TextInput from "../components/TextInput.js";
import Subjects from "../components/Subjects.js";
import CheckBoxes from "../components/CheckBoxes.js";
import Fields from "../data/fields.json";
import Levels from "../data/levels.json";
import subjects from "../data/subjects.json";

import "./inputCont.css";

const InputCont = props => {
  const selections = Levels.primary;
  return (
    <div className="container">
      <Search username="abc"> </Search>
      <Dropdown selections={selections} />
      {Fields.map((x, i) => {
        return <TextInput props={x} key={i} />;
      })}
      <Subjects subjects={subjects} levels={Levels} />
      <CheckBoxes subjects={subjects.primary} />
    </div>
  );
};

export default InputCont;
