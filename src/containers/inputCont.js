import React from "react";
import Search from "../components/Search.js";
import Dropdown from "../components/Dropdown.js";
import TextInput from "../components/TextInput.js";
import Radios from "../components/Radios.js";
import Fields from "../data/fields.json";
import Levels from "../data/levels.json";
import Subjects from "../data/subjects.json";
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
      <Radios options={Subjects.primary}></Radios>
    </div>
  );
};

export default InputCont;
