import React, { Component } from "react";
import "./CheckBoxes.css";

class CheckBoxes extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    return (
      <div className="sampleDiv">
        <span>This is a div.</span>
      </div>
    );
  }
}

export default CheckBoxes;
