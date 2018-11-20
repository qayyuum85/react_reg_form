import React, { Component } from "react";
import InputCont from "./containers/inputCont.js";
import Greeting from "./components/Greeting.js";
// import logo from './logo.svg';
import "./App.css";

class App extends Component {
  render() {
    const list = [
      { name: "Darjah 1", value: 1 },
      { name: "Darjah 2", value: 2 },
      { name: "Darjah 3", value: 3 },
      { name: "Darjah 4", value: 4 },
      { name: "Darjah 5", value: 5 },
      { name: "Darjah 6", value: 6 }
    ];
    return (
      <div className="App">
        "Hello World"
        <Greeting></Greeting>
        <InputCont theList={list} />
      </div>
    );
  }
}

export default App;
