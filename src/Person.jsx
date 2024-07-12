import React, { Component } from "react";
import { persons } from "./persons.js";
import Person2 from "./Person2.jsx";

export default class Person extends Component {
  state = {
    NewPerson: persons,
  };

  Getdelete = (id) => {
    let newPerson = [...this.state.NewPerson];
    newPerson = newPerson.filter((person) => person.id !== id);
    this.setState({
      NewPerson: newPerson,
    });
  };

  Update = (index) => {
    let newPerson = [...this.state.NewPerson];
    newPerson[index].phone = "+20 " + newPerson[index].phone;
    this.setState({
      newPerson,
    });
  };

  render() {
    console.log(persons);
    return (
      <>
        <h1 className="text-center p-2 mt-5 text-success">Persons Info</h1>
        <div className="d-flex flex-wrap gap-2 p-5 justify-content-center">
          {this.state.NewPerson.map((person, index) => (
            <Person2
              productInfo={person}
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
