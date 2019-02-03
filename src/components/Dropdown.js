import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class FormDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selections: props.selections,
      selectedVal: props.selected,
      selectedDropdown: "",
      onChange: props.onChange,
      dropdownOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  logger = e => {
    const val = e.target.value;
    this.setState(state => ({
      selectedVal: val
    }));
    this.state.onChange(val);
  };

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  componentWillReceiveProps(props) {
    this.setState({ selections: props.selections });
  }

  buttonOnClick = e => {
    const val = e.target.textContent;
    this.setState(() => ({ selectedDropdown: val }));
    this.state.onChange(val);
  };

  render() {
    return (
      <div>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            {this.state.selectedDropdown
              ? this.state.selectedDropdown
              : "Level"}
          </DropdownToggle>
          <DropdownMenu>
            {this.state.selections.map(opt => {
              let val, text;
              if (typeof opt === "object") {
                val = opt.val;
                text = opt.text;
              } else {
                val = opt;
                text = opt;
              }
              return (
                <DropdownItem onClick={this.buttonOnClick} key={val}>
                  {text}
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default FormDropdown;
