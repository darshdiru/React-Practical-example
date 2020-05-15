import React, { Component } from "react";
import "../Stylings/Sidebar.css";
import Counter from "../Hooks/Counter";

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (e) => {
    const name = this.state;
    e.preventDefault();
    this.setState({ name: "" });
    console.log(name);
  };

  render() {
    return (
      <div className="outer-bar">
        <input
          type="text"
          placeholder="Enter something"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button type="button" id="btn" onClick={this.handleSubmit}>
          Click here
        </button>
        <Counter />
        </div>
    );
  }
}
