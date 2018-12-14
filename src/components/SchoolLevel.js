import React, {Component} from "react";
import Dropdown from "../components/Dropdown.js";
import Radios from "../components/Radios.js"

class SchoolLevel extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedLevel:"",
      selectedSubject:"",
      levels:props.levels,
      subjects:props.subjects
    };
  }

  dropdownChange = (e) =>{
    const selected = e.target.value;
    this.setState(state =>({
      selectedLevel: selected
    }));
  }

  render(){
    return (
      <div>
        <Dropdown levels={this.state.levels} onChange={this.dropdownChange}></Dropdown>
        <Radios options={this.state.subjects}></Radios>
      </div>
    )
  }
}

export default SchoolLevel;