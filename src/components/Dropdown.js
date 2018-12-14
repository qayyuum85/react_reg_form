import React, { Component } from "react";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selections: props.selections,
      selectedVal: ""
    };
  }

  logger = e => {
    const val = e.target.value;
    this.setState(state => ({
      selectedVal: val
    }));
  };

  render() {
    return (
      <div>
        <select id="ddComponent1" onChange={this.logger}>
          {this.state.selections.map((opt, optIdx) => {
            return (
              <option value={opt.val} key={optIdx}>
                {opt.text}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default Dropdown;
