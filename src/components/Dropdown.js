import React, { Component } from "react";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selections: props.selections,
      selectedVal: "",
      onChange: props.onChange
    };
  }

  logger = e => {
    const val = e.target.value;
    this.setState(state => ({
      selectedVal: val
    }));
    this.state.onChange(val);
  };

  render() {
    return (
      <div>
        <select id="ddComponent1" onChange={this.logger}>
          {this.state.selections.map((opt, optIdx) => {
            let val, text;
            if (typeof opt === "object") {
              val = opt.val;
              text = opt.text;
            } else {
              val = opt;
              text = opt;
            }
            return (
              <option value={val} key={optIdx}>
                {text}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default Dropdown;
