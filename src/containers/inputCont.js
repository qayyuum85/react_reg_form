import React from "react";
import Search from "../components/Search.js";
import CheckBoxes from "../components/CheckBoxes.js";

const InputCont = ()=>{
  return (
    <div className="container">
      <Search username="abc"> </Search>
      <CheckBoxes></CheckBoxes>
    </div>
  );
};

export default InputCont;