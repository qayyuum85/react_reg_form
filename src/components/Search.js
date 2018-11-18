import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  render() {
    return (
      <div>
        <label htmlFor="mainName"> {this.props.username} </label>{" "}
        <input name="mainName" type="text" placeholder="Your name" />
      </div>
    );
  }
}

Search.PropTypes = {
  username: PropTypes.string
};

export default Search;
