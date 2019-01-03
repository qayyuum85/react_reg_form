import React, { Component } from "react";
import "./CheckBoxes.css";

class CheckBoxes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected,
      options: props.subjects,
      onClick: props.onClick
    };
  }

  updateState = e => {
    let currSelection = this.state.selected;
    const selected = e.target.value;
    const checked = e.target.checked;
    const isIncluded = currSelection.includes(selected);

    if (checked && !isIncluded) {
      currSelection.push(selected);
    }

    if (!checked && isIncluded) {
      let index = currSelection.findIndex(s => s === selected);
      currSelection.splice(index, 1);
    }

    this.setState({ selected: currSelection });
    this.state.onClick(currSelection);
  };

  componentWillReceiveProps(props) {
    this.setState({
      options: props.subjects,
      selected: props.selected
    });
  }

  render() {
    return (
      <div>
        {this.state.options.map(item => {
          const checked = this.state.selected.includes(item);
          return (
            <label className="containerChkBox" key={item}>
              {item}
              <input
                type="checkbox"
                value={item}
                onChange={this.updateState}
                checked={checked}
              />
              <span className="checkmark" />
            </label>
          );
        })}
      </div>
    );
  }
}

export default CheckBoxes;
