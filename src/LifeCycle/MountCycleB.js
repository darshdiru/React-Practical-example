import React, { Component } from "react";

export default class MountCycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
    console.log("LifeCycle B constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycle B getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycle B componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifeCycle B getDerivedStateFromProps");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycle B getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycle B componentDidUpdate");
  }

  render() {
    console.log("LifeCycle B render");
    return (
      <>
        <h3>Life Cycle B execution</h3>
      </>
    );
  }
}
