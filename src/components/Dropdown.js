import React, { Component } from "react";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selections: props.selections,
      selectedVal: props.selected,
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

  componentWillReceiveProps(props) {
    this.setState({ selections: props.selections });
  }

  render() {
    return (
      <div>
        <select id="ddComponent1" onChange={this.logger}>
          {this.state.selections.map((opt, optIdx) => {
            let val, text, selectedOpt;
            if (typeof opt === "object") {
              val = opt.val;
              text = opt.text;
            } else {
              val = opt;
              text = opt;
            }

            selectedOpt = val === this.state.selectedVal ? true : false;

            return (
              <option value={val} key={optIdx} selected={selectedOpt}>
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
