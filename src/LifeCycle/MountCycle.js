import React, { Component } from "react";
import MountCycleB from "./MountCycleB";

export default class MountCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
    console.log("LifeCycle A constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycle A getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycle A componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifeCycle A getDerivedStateFromProps");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycle A getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycle A componentDidUpdate");
  }

  changeState = () => {
    this.setState({ title: "hello world" });
  };

  render() {
    console.log("LifeCycle A render");
    return (
      <>
        <h3>Life Cycle execution</h3>
        <button onClick={this.changeState}>Change State</button>
        <MountCycleB />
      </>
    );
  }
}
