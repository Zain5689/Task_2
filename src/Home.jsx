import React, { Component } from "react";

export default class Home extends Component {
  state = {
    productName: "Dell",
    age: 30,
  };
  render() {
    return (
      <>
        <h1>Home App</h1>
        <h1>Name: {this.state.productName}</h1>
        <h1>Age: {this.state.age}</h1>
      </>
    );
  }
}
