import React from "react";
import "./TextInput.css";

const TextInput = (p) => {
  return (
    <div className="txtInput">
      <label htmlFor={"txt"+p.props.id}>{p.props.label}</label>
      <input type="text" placeholder={p.props.placeholder} id={"txt"+p.props.id}/>
    </div>
  );
}

export default TextInput;