import React, { Component } from "react";
import { locations } from "./locations.js";
import Location2 from "./Location2.jsx";

export default class Person extends Component {
  state = {
    Newlocation: locations,
  };

  Getdelete = (location_id) => {
    let newloc = [...this.state.Newlocation];
    newloc = newloc.filter(
      (locations) => locations.location_id !== location_id
    );
    this.setState({
      Newlocation: newloc,
    });
  };

  render() {
    console.log(location);
    return (
      <>
        <h1 className="text-center p-2 mt-5 text-danger">Locations Info</h1>
        <div className="d-flex flex-wrap gap-2 p-5 justify-content-center">
          {this.state.Newlocation.map((location, index) => (
            <Location2
              productInfo={location}
              key={index}
              index={index}
              delete={this.Getdelete}
            />
          ))}
        </div>
      </>
    );
  }
}
