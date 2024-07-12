import React, { Component } from "react";

export default class Location2 extends Component {
  render() {
    let { location_id, name, description, country, city } =
      this.props.productInfo;

    return (
      <>
        <div className="col-3 p-3 border border-2 border-dark ms-3">
          <h5>location_id: {location_id}</h5>
          <h5>name: {name}</h5>
          <h5>description: {description}</h5>
          <h5>country: {country}</h5>
          <h5 className="mb-5">city: {city}</h5>

          <button
            className="btn btn-outline-danger w-100 p-2 mb-1"
            onClick={() => this.props.delete(location_id)}
          >
            Delete
          </button>
        </div>
      </>
    );
  }
}
