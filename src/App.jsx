import React, { Component } from "react";
import Home from "./Home";
import About from "./About";
import Parent from "./Parent";
import Product from "./Product";
import Person from "./Person";
import Location from "./Location";

export default class App extends Component {
  render() {
    return (
      <>
        {/* <Parent /> */}
        <Location />
        <Product />
        <Person />
      </>
    );
  }
}
