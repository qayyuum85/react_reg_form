import React, { Component } from "react";
import "./CheckBoxes.css";

class CheckBoxes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  render() {
    const selected = (prop) => {
      console.log(prop);
    };
    return (
      <div className="sampleDiv">
        {this.props.items.map((x, i) => {
          return (
            <div>
              <input
                type="radio"
                id={"class" + x.value}
                value={x.name}
                name="classLevel"
                key={i}
                onClick={selected}
              />
              <label htmlFor={"class" + x.value}>{x.name}</label>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CheckBoxes;
