import React, { Component } from "react";
import Display from "./Display.js";
import "./TextInput.css";

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { currText: "" };
    this.updateLabel = this.updateLabel.bind(this);
  }

  updateLabel(e) {
    console.log(e.target.value);
    this.setState({currText: e.target.value});
  }

  render() {
    return (
      <div className="txtInput">
        <div><label htmlFor={"txt" + this.props.props.id}>{this.props.props.label}</label></div>
        <input
          type="text"
          placeholder={this.props.props.placeholder}
          id={"txt" + this.props.props.id}
          onKeyUp={this.updateLabel}
        />
        <Display text={this.state.currText} />
      </div>
    );
  }
}

export default TextInput;
