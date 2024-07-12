import React, { Component } from "react";
import { products } from "./products.js";
import Child from "./Child";

export default class Product extends Component {
  state = {
    NewProduct: products,
  };

  Getdelete = (id) => {
    let newProduct = [...this.state.NewProduct];
    newProduct = newProduct.filter((product) => product.id !== id);
    this.setState({
      NewProduct: newProduct,
    });
  };

  Update = (index) => {
    let newProduct = [...this.state.NewProduct];
    newProduct[index].price > 300
      ? (newProduct[index].price = newProduct[index].price - 50)
      : "";

    this.setState({
      newProduct,
    });
  };

  render() {
    return (
      <>
        <h1 className="text-center p-2 mt-5 text-danger">Product Info</h1>

        <div className="d-flex flex-wrap gap-2 p-5 justify-content-center">
          {this.state.NewProduct.map((product, index) => (
            <Child
              productInfo={product}
              key={index}
              index={index}
              delete={this.Getdelete}
              update={this.Update}
            />
          ))}
        </div>
      </>
    );
  }
}
