import React, { Component } from "react";
// import Display from "./Display.js";
import "./TextInput.css";

class TextInput extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      currText: "",
      valueUpdate: props.valueUpdate
    };
    this.updateLabel = this.updateLabel.bind(this);
  }

  updateLabel(e) {
    this.state.valueUpdate(e.target.name, e.target.value);
    this.setState({ currText: e.target.value });
  }

  render() {
    return (
      <div className="txtInput" style={{ width: "100%" }}>
        <div className="form-group">
          <label htmlFor={"txt" + this.props.props.id}>
            {this.props.props.label}
          </label>
          <input
            type="text"
            placeholder={this.props.props.placeholder}
            id={"txt" + this.props.props.id}
            onKeyUp={this.updateLabel}
            name={this.props.props.id}
            className="form-control"
          />
        </div>
      </div>
    );
  }
}

export default TextInput;
