import React, { Component } from "react";

export default class Child extends Component {
  render() {
    let { id, name, description, price, category, stock } =
      this.props.productInfo;

    return (
      <>
        <div className="col-3 p-2 bg-dark text-light ms-2">
          <h5>Name: {name}</h5>
          <h5>id: {id}</h5>
          <h5>description: {description}</h5>
          <h5>price: {price}</h5>
          <h5>category: {category}</h5>
          <h5 className="mb-4">stock: {stock}</h5>

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
