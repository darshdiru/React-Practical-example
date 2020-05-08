import React, { Component } from "react";
import Modal from "../Common/Modal";

export default class About extends Component {
  constructor() {
    super();
    this.state = {
      title: "Hello DDS",
      content: "This is an example of Modal",
    };
  }
  render() {
    return (
      <div className="container">
        <h2>Welcome to React topic</h2>
        <Modal show={this.state.title} content={this.state.content} />
      </div>
    );
  }
}
