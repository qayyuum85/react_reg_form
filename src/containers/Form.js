import React, { Component } from "react";
import { Alert } from "reactstrap";
import TextInput from "../components/TextInput.js";
import Subjects from "../components/Subjects.js";
// import "./Form.css";
import Fields from "../data/fields.json";
import Levels from "../data/levels.json";
import subjects from "../data/subjects.json";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {}
    };
    this.updateFields = this.updateFields.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  updateFields(name, value) {
    this.setState(state => ({
      inputs: {
        ...state.inputs,
        [name]: value
      }
    }));
  }

  submitForm(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <Alert color="primary">This is primary alert! Check it out</Alert>
        <div>
          {Fields.map((x, i) => {
            return (
              <TextInput props={x} key={i} valueUpdate={this.updateFields} />
            );
          })}
        </div>

        <Subjects
          subjects={subjects}
          levels={Levels}
          valueUpdate={this.updateFields}
        />
        <input
          type="submit"
          value="Submit"
          onClick={this.submitForm}
          className="btn btn-primary"
        />
      </div>
    );
  }
}

export default Form;
