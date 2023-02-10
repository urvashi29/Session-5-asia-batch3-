import React, { Component } from "react";

class LifecycleMethod extends Component {
  constructor() {
    super();
    this.state = {
      name: "harry",
    };
  }

  // (dep)
  // componentWillMount = () => {};

  static getDerivedStateFromProps = (props, state) => {
    console.log(state);
    return state;
  };

  componentDidMount = () => {
    //API Calls
    console.log("component did mount");
  };

  handleClick = () => {
    this.setState({
      name: "alex",
    });
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    console.log("should component update", nextState);
    // if() {

    // }
    return true;
  };

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("getSnapshotBeforeUpdate", prevState);
    return "get snapshot";
  };

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    console.log(" componentDidUpdate", prevState, snapshot);
  };

  componentWillUnmount = () => {
    //   window.removeEventListener();
    // clearTimeout();
  };
  
  render() {
    return (
      <div>
        {this.state.name}
        <button onClick={this.handleClick}>Update</button>
      </div>
    );
  }
}

export default LifecycleMethod;
