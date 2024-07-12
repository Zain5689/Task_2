import React, { Component } from "react";

export default class Person2 extends Component {
  render() {
    let { id, first_name, last_name, email, phone, address } =
      this.props.productInfo;

    return (
      <>
        <div className="col-3 p-2 border border-2 border-secondary ms-3">
          <h5>id: {id}</h5>
          <h5>first_name: {first_name}</h5>
          <h5>last_name: {last_name}</h5>
          <h5>email: {email}</h5>
          <h5>phone: {phone}</h5>
          <h5 className="mb-5">address: {address}</h5>

          <button
            className="btn btn-outline-danger w-100 p-2 mb-1"
            onClick={() => this.props.delete(id)}
          >
            Delete
          </button>

          <button
            className="btn btn-outline-success w-100 p-2"
            onClick={() => this.props.update(this.props.index)}
          >
            update
          </button>
        </div>
      </>
    );
  }
}
