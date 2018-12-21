import React, { Component } from "react";

class Radios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options,
      selectedVal: "",
      onSelect: props.onSelect
    };
    this.setSelected = this.setSelected.bind(this);
  }

  setSelected(e) {
    const selectedVal = e.target.value;
    this.setState(state => ({
      selectedVal: selectedVal
    }));
    if (this.state.onSelect && typeof this.state.onSelect === "function") {
      this.state.onSelect(selectedVal);
    }
  }

  render() {
    return (
      <div>
        {this.state.options.map(opt => {
          return (
            <div key={opt}>
              <input
                type="radio"
                key={opt}
                value={opt}
                onClick={this.setSelected}
                name="radioSubject"
              />
              <span>{opt}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Radios;
