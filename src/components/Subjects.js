import React, { Component } from "react";
import Dropdown from "./Dropdown.js";
import CheckBoxes from "./CheckBoxes.js";

class Subjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedType: "primary",
      selectedLevel: "d1",
      selectedSubject: [],
      levels: props.levels,
      subjects: props.subjects
    };
  }

  typeChange = v => {
    const selected = v;
    this.setState(state => {
      const level = selected === "primary" ? "d1" : "t1";
      return {
        selectedType: selected,
        selectedLevel: level,
        selectedSubject: []
      };
    });
  };

  levelChange = v => {
    const selected = v;
    this.setState(state => ({
      selectedLevel: selected,
      selectedSubject: []
    }));
  };

  cbxSelect = selectedSubjects => {
    this.setState(state => ({ selectedSubject: selectedSubjects }));
  };

  render() {
    const levels = (() => {
      if (this.state.selectedLevel === "") {
        return this.state.levels["primary"];
      }
      return this.state.levels[this.state.selectedType];
    })();

    const subject = (() => {
      if (
        this.state.selectedLevel === "t4" ||
        this.state.selectedLevel === "t5"
      ) {
        return this.state.subjects["secondary-upper"];
      }
      if (
        this.state.selectedLevel === "t1" ||
        this.state.selectedLevel === "t2" ||
        this.state.selectedLevel === "t3"
      ) {
        return this.state.subjects["secondary-lower"];
      }
      // default set to primary school
      return this.state.subjects["primary"];
    })();

    return (
      <div>
        <Dropdown
          selections={Object.keys(this.state.levels)}
          onChange={this.typeChange}
          selected={this.state.selectedType}
        />
        <Dropdown
          selections={levels}
          onChange={this.levelChange}
          selected={this.state.selectedLevel}
        />
        <CheckBoxes
          subjects={subject}
          onClick={this.cbxSelect}
          selected={this.state.selectedSubject}
        />
      </div>
    );
  }
}

export default Subjects;
