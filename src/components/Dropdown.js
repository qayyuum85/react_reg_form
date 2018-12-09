import React, { Component } from "react";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultVal: [
        { val: 1, text: "Darjah 1" },
        { val: 2, text: "Darjah 2" },
        { val: 3, text: "Darjah 3" },
        { val: 4, text: "Darjah 4" },
        { val: 5, text: "Darjah 5" },
        { val: 6, text: "Darjah 6" }
      ]
    };
  }

  render() {
    return (
      <div>
        <select id="ddComponent1">
          {this.state.defaultVal.map((opt, optIdx)=>{
            return <option value={opt.val} key={optIdx}>{opt.text}</option>
          })}
        </select>
      </div>
    );
  }
}

export default Dropdown;
