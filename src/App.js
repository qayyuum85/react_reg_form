import React, { Component } from "react";
import Greeting from "./components/Greeting.js";
import Form from "./containers/Form.js";
// import logo from './logo.svg';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
      </div>
    );
  }
}

export default App;
