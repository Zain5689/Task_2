import React, { Component } from "react";
// import Child from "./Child";

export default class Parent extends Component {
  state = {
    products: [
      { id: 1, name: "Dell", count: 25 },
      { id: 2, name: "Samsung", count: 30 },
      { id: 3, name: "Hp", count: 40 },
      { id: 4, name: "Lenvo", count: 50 },
      { id: 5, name: "Toshipa", count: 45 },
      { id: 6, name: "Dell", count: 25 },
      { id: 7, name: "Samsung", count: 30 },
      { id: 8, name: "Hp", count: 40 },
      { id: 9, name: "Lenvo", count: 50 },
      { id: 10, name: "Toshipa", count: 45 },
      { id: 11, name: "Dell", count: 25 },
      { id: 12, name: "Samsung", count: 30 },
      { id: 13, name: "Hp", count: 40 },
      { id: 14, name: "Lenvo", count: 50 },
      { id: 15, name: "Toshipa", count: 45 },
    ],
  };

  Getdelete = (id) => {
    let newProduct = [...this.state.products];
    newProduct = newProduct.filter((product) => product.id !== id);
    this.setState({
      products: newProduct,
    });
  };

  Update = (index) => {
    let Products = [...this.state.products];
    Products[index].count = Products[index].count - 1;
    this.setState({
      Products,
    });
  };

  render() {
    return (
      <>
        <h1>Parent App </h1>
        <div className="d-flex flex-wrap gap-2 p-5 ">
          {this.state.products.map((product, index) => (
            <Child
              productInfo={product}
              key={index}
              index={index}
              delete={this.Getdelete}
              update={this.Update}
            />
          ))}
          ;
        </div>
      </>
    );
  }
}
