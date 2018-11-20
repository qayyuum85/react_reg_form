import React from "react";
import Search from "../components/Search.js";
import CheckBoxes from "../components/CheckBoxes.js";
import TextInput from "../components/TextInput.js";
import Fields from "../data/fields.json";

const InputCont = props => {
  return (
    <div className="container">
      <Search username="abc"> </Search>
      <CheckBoxes items={props.theList} />
      {Fields.map((x, i)=>{
        return (
          <TextInput props={x} key={i}></TextInput>
        );
      })}
    </div>
  );
};

export default InputCont;
